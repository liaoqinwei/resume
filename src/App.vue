<script setup lang="ts">
import { Tabs } from "./components/Tabs"
import Background from "./components/Background.vue";

</script>

<template>
  <div id="app">
    <Background></Background>
    <Tabs></Tabs>
  </div>
</template>

<style scoped>
#app {
  width: 100vw;
  height: 100vh;
  display: grid;
  place-content: center;
  position: relative;
}
</style>
