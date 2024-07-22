<script setup lang="ts">
import { provide, ref } from 'vue'
import Home from './Home.vue'
import PrependInfo from './PrependInfo.vue'
import Profile from './Profile.vue'
import Skill from './Skill.vue'
import JobExperience from './JobExperience.vue'
import ProjectExperience from './ProjectExperience.vue'


const tab = ref('home')

const tabWindowTransition = ref(true)
const tabWindowReverseTransition = ref(true)
const alias = ref(['前端开发者。', '技术追求者。', '运动爱好者。'])
provide('alias', alias)
</script>


<template>
  <v-sheet :height="700" :width="1200" rounded="lg" :elevation="12" class="main-content-wrapper">
    <PrependInfo></PrependInfo>

    <v-card height="100%" class="main-area" :class="{ 'width-full': tab === 'home' }" flat>
      <div class="d-flex flex-row" style="height:100%;">
        <v-tabs v-model="tab" color="primary" direction="vertical" class="elevation-4" style="z-index: 2;" >
          <v-tab value="home" :min-height="80">
            <template #default>
              <div class="d-flex flex-column align-center ga-2" style="width: 60px;">
                <v-icon icon="mdi-home-circle" size="40"></v-icon>
              </div>
            </template>
          </v-tab>
          <v-tab value="profile" :min-height="80">
            <template #default>
              <div class="d-flex flex-column align-center ga-2">
                <v-icon icon="mdi-account" size="30"/>
                <span>个人信息</span>
              </div>
            </template>
          </v-tab>
          <v-tab value="skill" :min-height="80">
            <template #default>
              <div class="d-flex flex-column align-center ga-2">
                <v-icon icon="mdi-tools" size="30" />
                <span>熟练技能</span>
              </div>
            </template>
          </v-tab>
          <v-tab value="job-experience" :min-height="80">
            <template #default>
              <div class="d-flex flex-column align-center ga-2">
                <v-icon icon="mdi-file-account" size="30" />
                <span>工作经历</span>
              </div>
            </template>
          </v-tab>
          <v-tab value="project-experience" :min-height="80">
            <template #default>
              <div class="d-flex flex-column align-center ga-2">
                <v-icon icon="mdi-invoice-list" size="30" />
                <span>项目经验</span>
              </div>
            </template>
          </v-tab>
        </v-tabs>

        <!-- Tabs Contents -->
        <v-tabs-window v-model="tab" class="tabs-window">
          <v-tabs-window-item value="home" :transition="tabWindowTransition"
            :reverse-transition="tabWindowReverseTransition">
            <Home></Home>
          </v-tabs-window-item>

          <v-tabs-window-item value="profile" :transition="tabWindowTransition"
            :reverse-transition="tabWindowReverseTransition">
            <Profile></Profile>
          </v-tabs-window-item>

          <v-tabs-window-item value="skill" :transition="tabWindowTransition"
            :reverse-transition="tabWindowReverseTransition">
            <Skill></Skill>
          </v-tabs-window-item>

          <v-tabs-window-item value="job-experience" :transition="tabWindowTransition"
            :reverse-transition="tabWindowReverseTransition">
            <JobExperience></JobExperience>
          </v-tabs-window-item>

          <v-tabs-window-item value="project-experience" class="h-100 py-16" style="box-sizing: border-box;"
            :transition="tabWindowTransition" :reverse-transition="tabWindowReverseTransition">
            <ProjectExperience></ProjectExperience>
          </v-tabs-window-item>
        </v-tabs-window>
      </div>
    </v-card>

  </v-sheet>
</template>


<style scoped lang="less">
.main-content-wrapper {
  position: relative;
  overflow: hidden;


  .main-area {
    position: absolute;
    width: 80%;
    right: 0;
    top: 0;
    width: calc(1200px - 350px);
    transition: width ease-in-out .6s;
    transform-origin: top right;

    .tabs-window {
      height: 100%;
      width: 100%;

      & :deep(.v-window__container) {
        height: 100%;
        width: 100%;
        display: block;
      }
    }

    &.width-full {
      width: 100%;
    }
  }
}
</style>