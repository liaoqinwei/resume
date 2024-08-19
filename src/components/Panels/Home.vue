<script setup lang="ts">
import { inject } from 'vue'
import TextTransition from '../TextTransition.vue'
import { useLayoutMobile } from '../../hooks/useLayoutMobile';

const alias = inject<string[]>('alias')!

const { isMobile } = useLayoutMobile()
</script>


<template>

  <v-sheet height="100%" :width="isMobile ? '100%' : '1100px'" class="profile">
    <div class="profile-content h-100 d-flex flex-column align-center ga-2 pt-16">
      <v-avatar color="grey-darken-1" image="./imgs/avatar.png" size="160" density="comfortable" end></v-avatar>
      <h3 class="text-h4 mt-4">廖秦伟</h3>
      <p class="text-body-1" style="font-size: 14px;">你好，我是一名<b>
          <TextTransition :list="alias"></TextTransition>
        </b>|</p>
      <p class="mx-30 mt-4 ma-xs-auto" style="font-size: 20px;">我专注于前端开发，拥有4年的经验，热衷于技术探索和源码阅读。擅长利用最新技术高效解决业务问题，曾参与多个项目的开发，包括 Vue 框架、移动端应用、后台管理系统、3D 数字孪生、微信小程序等。具备后端开发基础，能够独立完成项目并与团队紧密合作。</p>

      <div class="d-flex ga-lg-8 ga-md-4 ga-3 mt-4">
        <v-btn prepend-icon="mdi-language-c" href="https://blog.csdn.net/weixin_45412353">
          CSDN
        </v-btn>
        <v-btn prepend-icon="mdi-github" href="https://github.com/liaoqinwei">
          GitHub
        </v-btn>
        <v-btn href="./pdfs/resume.pdf" v-if="isMobile">
          下载简历
        </v-btn>
      </div>
    </div>

  </v-sheet>

</template>


<style scoped>
.profile {
  text-align: center;

  .mx-30 {
    margin: 0 calc(4px * 30);
  }
}

@media (max-width:800px) {
  .mx-30 {
    margin: 0 calc(4px * 5) !important;
  }
}
</style>