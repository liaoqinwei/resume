<script setup lang="ts">
import { inject, ref } from 'vue';
import TextTransition from '../TextTransition.vue'

const alias = inject<string[]>('alias')!

const snackbar = ref(false)
const toWechat = () => {
  navigator.clipboard.writeText('15178733891').then(() => {
    snackbar.value = true
  })
}

</script>


<template>



  <v-sheet height="100%" width="350px" flat class="pre-info">

    <div class="profile-content h-100 d-flex flex-column align-center ga-2 pt-16 mt-10">
      <v-avatar color="grey-darken-1" image="./imgs/avatar.png" size="160" density="comfortable" end></v-avatar>
      <h3 class="text-h5 mt-4">廖秦伟</h3>
      <p class="text-body-1" style="font-size: 14px;">你好，我是一名<b>
          <TextTransition :list="alias"></TextTransition>
        </b>|</p>
      <div class="d-flex ga-8 mt-4">
        <v-btn size="large" href="./pdfs/resume.pdf">
          下载简历
        </v-btn>
      </div>

      <div class="d-flex ga-8 mt-8">
        <v-btn icon="mdi-github" href="https://github.com/liaoqinwei"></v-btn>

        <v-snackbar v-model="snackbar"  :timeout="3000" timer color="transparent">
          <v-alert text="复制成功！" class="alert-box pa-0" title="Alert title" type="success" variant="plain"></v-alert>

          <template v-slot:actions>
            <v-btn color="pink" variant="text" @click="snackbar = false">
              关闭
            </v-btn>
          </template>
        </v-snackbar>
        <v-btn icon="mdi-wechat" @click="toWechat"></v-btn>

        <v-btn icon="mdi-message-processing" @click="toWechat"></v-btn>
      </div>
    </div>
  </v-sheet>
</template>


<style scoped>
.pre-info {
  position: absolute;
  left: 0;
  top: 0;
}
</style>