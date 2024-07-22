<script setup>
// @ts-nocheck
import { onMounted, onUnmounted, ref } from 'vue'

const render = (canvas) => {
  let width = canvas.width = window.innerWidth * 0.75;
  let height = canvas.height = window.innerHeight * 0.75;
  var gl = canvas.getContext('webgl');

  var mouse = { x: 0, y: 0 };

  var numMetaballs = 50;
  let metaballs = [];

  var vertexShaderSrc = `
attribute vec2 position;

void main() {
// position specifies only x and y.
// We set z to be 0.0, and w to be 1.0
gl_Position = vec4(position, 0.0, 1.0);
}
`;

  var fragmentShaderSrc = `
precision highp float;

uniform vec3 metaballs[` + numMetaballs + `];

uniform float WIDTH;
uniform float HEIGHT;


void main(){
float x = gl_FragCoord.x;
float y = gl_FragCoord.y;

float sum = 0.0;
for (int i = 0; i < ` + numMetaballs + `; i++) {
vec3 metaball = metaballs[i];
float dx = metaball.x - x;
float dy = metaball.y - y;
float radius = metaball.z;

sum += (radius * radius) / (dx * dx + dy * dy);
}

if (sum >= 1.) {
gl_FragColor = vec4(mix(vec3(x / WIDTH, y / HEIGHT, 1.0), vec3(0, 0, 0), max(0.0, 1.0 - (sum - 0.99) * 100.0)), 1.0);
return;
}

gl_FragColor = vec4(1., 1., 1., 1.0);
}

`;




  var vertexShader = compileShader(vertexShaderSrc, gl.VERTEX_SHADER);
  var fragmentShader = compileShader(fragmentShaderSrc, gl.FRAGMENT_SHADER);

  var program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  gl.useProgram(program);

  var vertexData = new Float32Array([
    -1.0, 1.0, // top left
    -1.0, -1.0, // bottom left
    1.0, 1.0, // top right
    1.0, -1.0, // bottom right
  ]);
  var vertexDataBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexDataBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, vertexData, gl.STATIC_DRAW);

  var positionHandle = getAttribLocation(program, 'position');
  gl.enableVertexAttribArray(positionHandle);
  gl.vertexAttribPointer(positionHandle,
    2, // position is a vec2
    gl.FLOAT, // each component is a float
    gl.FALSE, // don't normalize values
    2 * 4, // two 4 byte float components per vertex
    0 // offset into each span of vertex data
  );



  let metaballsHandle = getUniformLocation(program, 'metaballs');
  let uniformWidth = getUniformLocation(program, 'WIDTH');
  let uniformHeight = getUniformLocation(program, 'HEIGHT');

  const resizeEffect = () => {
    width = window.innerWidth * 0.75;
    height = window.innerHeight * 0.75;

    gl.uniform1f(uniformWidth, width)
    gl.uniform1f(uniformHeight, height)

    metaballs = []
    for (var i = 0; i < numMetaballs; i++) {
      var radius = Math.random() * 60 + 10;
      metaballs.push({
        x: Math.random() * (width - 2 * radius) + radius,
        y: Math.random() * (height - 2 * radius) + radius,
        vx: (Math.random() - 0.5) * 3,
        vy: (Math.random() - 0.5) * 3,
        r: radius * 0.75
      });
    }
  }

  resizeEffect()

  let cancelKey
  let stop = () => {
    cancelAnimationFrame(cancelKey)
    window.removeEventListener('resize', resizeCb)
  }
  loop();
  function loop() {
    for (var i = 0; i < numMetaballs; i++) {
      var metaball = metaballs[i];
      metaball.x += metaball.vx;
      metaball.y += metaball.vy;

      if (metaball.x < metaball.r || metaball.x > width - metaball.r) metaball.vx *= -1;
      if (metaball.y < metaball.r || metaball.y > height - metaball.r) metaball.vy *= -1;
    }

    var dataToSendToGPU = new Float32Array(3 * numMetaballs);
    for (var i = 0; i < numMetaballs; i++) {
      var baseIndex = 3 * i;
      var mb = metaballs[i];
      dataToSendToGPU[baseIndex + 0] = mb.x;
      dataToSendToGPU[baseIndex + 1] = mb.y;
      dataToSendToGPU[baseIndex + 2] = mb.r;
    }
    gl.uniform3fv(metaballsHandle, dataToSendToGPU);



    //Draw
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

    cancelKey = requestAnimationFrame(loop);
  }

  function compileShader(shaderSource, shaderType) {
    var shader = gl.createShader(shaderType);
    gl.shaderSource(shader, shaderSource);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      throw "Shader compile failed with: " + gl.getShaderInfoLog(shader);
    }

    return shader;
  }



  function getUniformLocation(program, name) {
    var uniformLocation = gl.getUniformLocation(program, name);
    if (uniformLocation === -1) {
      throw 'Can not find uniform ' + name + '.';
    }
    return uniformLocation;
  }

  let timer = null
  const resizeCb = () => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(resizeEffect, 200)

  }
  window.addEventListener('resize', resizeCb)

  function getAttribLocation(program, name) {
    var attributeLocation = gl.getAttribLocation(program, name);
    if (attributeLocation === -1) {
      throw 'Can not find attribute ' + name + '.';
    }
    return attributeLocation;
  }

  canvas.onmousemove = function (e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }

  return {
    stop
  }
}
const canvas = ref(null)

let stop
onMounted(() => {
  stop = render(canvas.value).stop
})

onUnmounted(() => stop())
</script>


<template>
  <div class="container">
    <canvas ref="canvas"></canvas>
  </div>
</template>


<style scoped>
canvas {
  width: 100%;
  height: 100%;
}

.container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>