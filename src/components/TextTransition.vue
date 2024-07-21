<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
const props = defineProps<{ list: string[] }>()

const curCharIndex = ref(0)

const curIndex = ref(0)

const activeStr = computed(() => {
  return props?.list?.[curIndex.value]?.slice(0, curCharIndex.value + 1) || ''
})

const animation = () => {
  let animation: number
  let step = 1
  let clock = 0
  let preTime = Date.now()
  let preCharSnapshot = 0
  const charInterval = 50
  const stringInterval = 1000

  const stop = () => {
    window.cancelAnimationFrame(animation)
  }

  const fn = () => {
    curCharIndex.value += step
    if (step > 0) {
      if (curCharIndex.value >= props.list?.[curIndex.value].length) {
        preCharSnapshot += stringInterval
        step = -1
      }
    } else {
      if (curCharIndex.value < 0) {
        step = 1
        curIndex.value += 1
        if (curIndex.value >= props?.list.length) curIndex.value = 0
      }
    }
  }

  const start = () => {
    let now = Date.now()
      clock += now - preTime
      preTime = now

      if (clock > preCharSnapshot + charInterval) {
        preCharSnapshot = clock
        fn()
      }

    animation = requestAnimationFrame(start)
  }
  
  return {
    start,
    stop
  }
}

const { stop, start } = animation()

onMounted(start)
onUnmounted(stop)

</script>


<template>
  <span>{{ activeStr }}</span>
</template>


<style scoped></style>