<template>
  <div class="home">
    <AiHeader />
    <el-container>
      <el-container>
        <el-aside width="200px">
          <el-menu>
            <template v-for="v in items" :key="v.path">
              <el-sub-menu v-if="v.children" :index="v.index">
                <template #title>
                  <!-- <el-icon><component :is="v.icon"></component></el-icon -->
                  {{ v.name }}
                </template>
                <template v-for="cv in v.children" :key="cv.path">
                  <el-submenu v-if="cv.children" :index="cv.path">
                    <template v-for="cvc in cv.children" :key="cvc.path">
                      <el-submenu v-if="cvc.children">
                        <template v-slot:title>{{ cvc.name }}</template>
                        <el-menu-item
                          v-for="cvcv in cv.children"
                          :key="cvcv.path"
                          :index="cvcv.path"
                          >{{ cvcv.name }}</el-menu-item
                        >
                      </el-submenu>
                      <template v-else>
                        <el-menu-item
                          v-for="cvc in cv.children"
                          :key="cvc.path"
                          :index="cvc.path"
                          >{{ cvc.name }}</el-menu-item
                        >
                      </template>
                    </template>
                  </el-submenu>
                  <el-menu-item v-else :key="cv.path" :index="cv.path">
                    <template #title>
                      {{ cv.name }}
                    </template>
                  </el-menu-item>
                </template>
              </el-sub-menu>
              <el-menu-item v-else :index="v.path">
                <template #title>
                  <!-- <el-icon><component :is="v.icon"></component></el-icon -->
                  {{ v.name }}
                </template>
              </el-menu-item>
            </template>
          </el-menu>
        </el-aside>
        <el-main>
          <main-page />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { onMounted, reactive } from "vue";
import MainPage from "./main-page/index.vue";
import AiHeader from './ai-header'


@Options({
  components:{
    AiHeader,
    MainPage
  }
})
export default class AiNav extends Vue { 
  items = [
    {
      name: "聊天对话",
      path: "/testthree",
    },
    {
      name: "图形图像",
      path: "/testthree",
    },
    {
      name: "AI办公",
      index: 2,
      children: [
        {
          name: "typescript",
          path: "/typescript",
        },
        {
          name: "Navigator two two",
          path: "/testtwo",
        },
      ],
    },
    {
      name: "AI学习",
      index: 3,
      children: [
        {
          name: "ai",
          path: "/ai-nav",
        },
      ],
    },
  ]

  }

</script>
<style lang="scss" scoped>
.home {
}
</style>
