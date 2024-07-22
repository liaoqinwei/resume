<script setup lang="ts">
import { Tabs } from "../components/Tabs"
// @ts-ignore
import Background from "../components/Background.vue";
</script>


<template>
  <div class="default-layout">
    <Background></Background>
    <Tabs></Tabs>
  </div>
</template>


<style scoped>
.default-layout {
  width: 100vw;
  height: 100vh;
  display: grid;
  place-content: center;
  position: relative;
}
</style>