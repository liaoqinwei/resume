<script setup lang="ts">
import Default from './layouts/Default.vue';
import Mobile from './layouts/Mobile.vue';
import { useLayoutMobile } from './hooks/useLayoutMobile'
import { computed, provide, ref } from 'vue';

const { isMobile } = useLayoutMobile()


const activeLayout = computed(() => {

  console.log(isMobile.value)
  if (isMobile.value) return Mobile
  return Default
})

const alias = ref(['前端开发者。', '技术追求者。', '运动爱好者。'])
provide('alias', alias)
</script>

<template>
  
  <div class="#app">
    <Transition name="fade" mode="out-in" appear>
      <component :is="activeLayout"></component>
    </Transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
