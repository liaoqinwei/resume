<script setup lang="ts">
import { ref } from 'vue'
import { useLayoutMobile } from '../../hooks/useLayoutMobile';

const infos = ref([
  { name: '姓名', value: '廖秦伟' },
  { name: '邮箱', value: 'liaoqinwei2@gmail.com' },
  { name: '微信', value: '15178733891' },
  { name: '地址', value: '重庆九龙坡区' },
])

const { isMobile } = useLayoutMobile()


</script>


<template>
  <v-sheet height="100%" :width="isMobile ? '100%' : '750px'"  class="profile pt-16 pl-lg-12 pl-4 pr-lg-0 pr-4">
    <h5 class="text-h5">个人信息</h5>
    <div>
      <v-container>
        <v-row align="start" no-gutters dense align-content="start">
          <v-col v-for="item in infos" :key="item.name" :cols="12" :md="6" :lg="6">
            <v-sheet class="pa-2">
              <p>
                <span class="text-subtitle-1 font-weight-bold">{{ item.name }}：</span>
                <span class="text-body-1">{{ item.value }}</span>
              </p>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
      <v-divider></v-divider>
    </div>

    <h5 class="text-h5 mt-10">教育背景</h5>
    <v-sheet class="mt-6" height="100">
      <v-img width="100" aspect-ratio="1/1" cover src="./imgs/academy.webp" inline
        style="vertical-align: middle;"></v-img>
      <span class="text-h6 font-weight-bold pl-2">国家开放大学，专科</span>
      <span class="text-h6">计算机信息管理</span>
    </v-sheet>
  </v-sheet>
</template>


<style scoped></style>