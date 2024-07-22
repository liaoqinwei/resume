<script setup lang="ts">
import { useLayoutMobile } from '../../hooks/useLayoutMobile';


const { isMobile } = useLayoutMobile()

</script>


<template>
  <v-sheet height="100%" style="overflow-y:auto;" :width="isMobile ? '100%' : '750px'"
    class="skill pl-lg-12 pl-4 pr-lg-0 pr-4">
    <h5 class="text-h5">项目经验</h5>
    <v-divider class="my-3"></v-divider>

    <div>
      <v-timeline align="start" side="end" class="justify-start">

        <v-timeline-item dot-color="blue-lighten-1" size="small">
          <div class="d-flex">
            <div>
              <p class="text-h6">低代码OA平台</p>
              <p class="my-2 text-subtitle-2">
                <span class="font-weight-bold">项目描述：</span>
                <span>低代码工具并结合流程引擎，无需代码创建流程表单</span>
              </p>
              <p class="text-body-2 text-grey-darken-1 d-flex flex-wrap ga-2 my-2">
                <v-chip>Vue.js</v-chip>
                <v-chip>TypeScript</v-chip>
                <v-chip>Element-Plus</v-chip>
                <v-chip>Vite</v-chip>
                <v-chip>VForm</v-chip>
                <v-chip>bpmn-js</v-chip>
              </p>
              <div class="text-body-2">
                <ul class="project-infos text-grey-darken-1">
                  <li>二次开发VForm，实现画板组件、提交组件、树形组件，并结合bpmn-js。</li>
                  <li>通过后端数据库表，可映射成自己想要的业务模型，通过业务模型可直接解析为表单/列表。</li>
                  <li>将数据库的一对多、多对多、一对一、多对一、树关联解析成合适的表单组件。</li>
                  <li>通过eval函数解决渲染VForm在同一个窗口运行多次，全局变量污染问题。</li>
                </ul>
              </div>
            </div>
          </div>
        </v-timeline-item>

        <v-timeline-item dot-color="blue-lighten-1" size="small">
          <div class="d-flex">
            <div>
              <p class="text-h6">瞰图低代码编辑器</p>
              <p class="my-2 text-subtitle-2">
                <span class="font-weight-bold">项目描述：</span>
                <span>大屏编辑器，快速生成Web大屏网页，多种图表在线编辑，可导入多种格式模型。</span>
              </p>
              <p class="text-body-2 text-grey-darken-1 d-flex flex-wrap ga-2 my-2">
                <v-chip>Vue.js</v-chip>
                <v-chip>Three.js</v-chip>
                <v-chip>Lerna</v-chip>
                <v-chip>monorepo</v-chip>
              </p>
              <div class="text-body-2">
                <ul class="project-infos text-grey-darken-1">
                  <li>实现组件图层、echart图表生成、元素几何属性修改、组件拖拽/旋转、项目ui组件库等。</li>
                  <li>使用lerna实现monorepo管理，统一管理编辑器控制页面，UI控件、SASS平台页面。</li>
                  <li>自定义事件池，管理编辑器事件，路由。</li>
                  <li>通过数学几何运算实现组件的旋转和缩放功能。</li>
                </ul>
              </div>
            </div>
          </div>
        </v-timeline-item>

        <v-timeline-item dot-color="blue-lighten-1" size="small">
          <div class="d-flex">
            <div>
              <p>
                <span class="text-h6">3D可视化展台 </span>
                <v-chip class="ml-2" variant="plain" href="http://meta.iotwant.com/meta/index.html#/">链接</v-chip>
              </p>
              <p class="my-2 text-subtitle-2">
                <span class="font-weight-bold">项目描述：</span>
                <span>厚展科技数字展厅</span>
              </p>
              <p class="text-body-2 text-grey-darken-1 flex-wrap d-flex ga-2 my-2">
                <v-chip>Vue.js3</v-chip>
                <v-chip>Three.js</v-chip>
                <v-chip>video.js</v-chip>
              </p>
              <div class="text-body-2">
                <ul class="project-infos text-grey-darken-1">
                  <li>使用threejs渲染场景，镜面反射二次开发，物理材质二次开发。</li>
                  <li>人物在场景自由移动，物联网摄像头对接，场景优化，在场景中渲染视频。</li>
                </ul>
              </div>
            </div>
          </div>
        </v-timeline-item>

      </v-timeline>
    </div>

  </v-sheet>
</template>


<style scoped>
.project-infos {
  list-style: circle;
  line-height: 1.6;
}
</style>