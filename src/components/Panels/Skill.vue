<script setup lang="ts">
import { ref } from 'vue'
import { useLayoutMobile } from '../../hooks/useLayoutMobile';

const skillProgress = ref([
  { name: '前端', value: 90, color: 'primary' },
  { name: '构建/工具', value: 80, color: 'teal' },
  { name: '设计', value: 30, color: 'red' },
  { name: '服务', value: 60, color: 'pink' }
])
const { isMobile } = useLayoutMobile()

</script>


<template>
  <v-sheet height="100%" :width="isMobile ? '100%' : '750px'"  class="skill pt-16 pl-lg-12 pl-4 pr-lg-0 pr-4">
    <h5 class="text-h5">擅长技术</h5>
    <div class="d-flex mt-6 ga-10 flex-wrap justify-space-between pl-4 pr-16">
      <div class="text-center" v-for="item in skillProgress">
        <v-progress-circular :model-value="item.value" :rotate="360" :size="100" :width="5" :color="item.color">
          {{ item.value }}%
        </v-progress-circular>
        <p class="mt-3">{{ item.name }}</p>
      </div>
    </div>
    <div class="mt-4">
      <h6 class="text-h6 text-grey-darken-1">前端:</h6>
      <div class="d-flex flex-wrap ga-4 ">
        <v-btn class="text-none font-weight-bold" flat color="red-lighten-1">HTML5</v-btn>
        <v-btn class="text-none font-weight-bold" flat color="orange-darken-2">CSS</v-btn>
        <v-btn class="text-none font-weight-bold" flat color="yellow-darken-4">JavaScript</v-btn>
        <v-btn class="text-none font-weight-bold" flat color="light-blue-accent-3">TypeScript</v-btn>
        <v-btn class="text-none font-weight-bold" flat color="light-blue-darken-2">Less</v-btn>
        <v-btn class="text-none font-weight-bold" flat color="light-blue-darken-4">React</v-btn>
        <v-btn class="text-none font-weight-bold" flat color="green-lighten-1">Vue.js</v-btn>
        <v-btn class="text-none font-weight-bold" flat color="green-lighten-1">Nuxt.js</v-btn>
        <v-btn class="text-none font-weight-bold" flat color="blue-darken-2">Three.js</v-btn>
        <v-btn class="text-none font-weight-bold" flat color="orange-darken-4">Vitest</v-btn>

      </div>
      <h6 class="text-h6 text-grey-darken-1 mt-2">构建/工具:</h6>
      <div class="d-flex flex-wrap ga-4 ">
        <v-btn class="text-none font-weight-bold" flat color="orange-darken-1">Vite</v-btn>
        <v-btn class="text-none font-weight-bold" flat color="blue-darken-2">webpack</v-btn>
        <v-btn class="text-none font-weight-bold" flat color="orange-darken-2">rollup</v-btn>
        <v-btn class="text-none font-weight-bold" flat color="grey-darken-2">git</v-btn>
        <v-btn class="text-none font-weight-bold" flat color="yellow-darken-4">Rollup.js</v-btn>
        <v-btn class="text-none font-weight-bold" flat color="amber-darken-4">NPM</v-btn>
      </div>
      <h6 class="text-h6 text-grey-darken-1 mt-2">服务端:</h6>
      <div class="d-flex flex-wrap ga-4">
        <v-btn class="text-none font-weight-bold" flat color="green-lighten-1">Nginx</v-btn>
        <v-btn class="text-none font-weight-bold" flat color="green-lighten-1">Node.js</v-btn>
        <v-btn class="text-none font-weight-bold" flat color="blue-darken-2">PM2</v-btn>
        <v-btn class="text-none font-weight-bold" flat color="light-blue-accent-3">SQL</v-btn>
        <v-btn class="text-none font-weight-bold" flat color="grey-darken-2">Koa</v-btn>
      </div>
      <h6 class="text-h6 text-grey-darken-1 mt-2">设计:</h6>
      <div class="d-flex flex-wrap ga-4 ">
        <v-btn class="text-none font-weight-bold" flat color="light-blue-darken-4">Photoshop</v-btn>
        <v-btn class="text-none font-weight-bold" flat color="light-blue-accent-3">Figma</v-btn>
        <v-btn class="text-none font-weight-bold" flat color="orange-darken-2">Illustrator</v-btn>
      </div>
    </div>


  </v-sheet>
</template>


<style scoped></style>