<script setup lang="ts">
import { useLayoutMobile } from '../../hooks/useLayoutMobile';

const { isMobile } = useLayoutMobile()

</script>


<template>
  <v-sheet height="100%" :width="isMobile ? '100%' : '750px'" class="skill pt-16 pl-lg-12 pl-4 pr-lg-0 pr-4">
    <h5 class="text-h5">工作经验</h5>
    <v-divider class="my-3"></v-divider>
    <v-timeline align="start" side="end">

      <v-timeline-item dot-color="blue-lighten-1" size="small" >
        <div class="d-flex">
          <div>
            <p class="text-h6">前端工程师</p>
            <p class="my-2 ">
              <span class="font-weight-bold  text-blue-lighten-1">北京邦得鼎盛科技有限公司重庆分公司 </span>
              <span>/2020.07 ~ 2021.05</span>
            </p>
            <div class="text-body-2">
              主要负责微信小程序开发、公司sdk编写，将公司原先的单文件sdk进行模块化/工程化改造。
              配合后端完成项目功能，配合UI改造页面样式。
              参与项目前期讨论，经常提出修改意见，让项目开放更加合理化，提升项目交互效率和质量。
            </div>
          </div>
        </div>
      </v-timeline-item>

      <v-timeline-item dot-color="blue-lighten-1" size="small">
        <div class="d-flex">
          <div>
            <p class="text-h6">前端工程师</p>
            <p class="my-2 ">
              <span class="font-weight-bold  text-blue-lighten-1">重庆瞰图科技有限公司 </span>
              <span>/2021.07 ~ 2023.03</span>
            </p>
            <div class="text-body-2">
              前端开放，负责公司门户网站的开发，维护，部署。三维可视化项目开发，三维低代码编辑器的研发。带领团队进行技术变革，
              使用最新的技术解决项目问题，使用工具提升项目开发效率。
            </div>
          </div>
        </div>
      </v-timeline-item>

      <v-timeline-item dot-color="blue-lighten-1" size="small">
        <div class="d-flex">
          <div>
            <p class="text-h6">前端研发</p>
            <p class="my-2 ">
              <span class="font-weight-bold  text-blue-lighten-1">重庆四通都城科技发展有限公司 </span>
              <span>/2023.06 ~ 2024.07</span>
            </p>
            <div class="text-body-2">
              前端研发，低代码编辑器、流程系统的研发，为项目提供流程和低代码表单支持，提升项目的开发速度和质量。
            </div>
          </div>
        </div>
      </v-timeline-item>
    </v-timeline>
  </v-sheet>
</template>


<style scoped></style>