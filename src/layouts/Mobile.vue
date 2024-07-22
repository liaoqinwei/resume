<script setup lang="ts">
import Home from '../components/Panels/Home.vue';
import JobExperience from '../components/Panels/JobExperience.vue';
import Profile from '../components/Panels/Profile.vue';
import ProjectExperience from '../components/Panels/ProjectExperience.vue';
import Skill from '../components/Panels/Skill.vue';
</script>


<template>
  <div class="mobile-layout">
    <Home></Home>
    <Profile></Profile>
    <Skill></Skill>
    <JobExperience></JobExperience>
    <ProjectExperience></ProjectExperience>
  </div>
</template>


<style scoped>
.mobile-layout {
  position: relative;
}
</style>