<template>
  <div id="app">
    <div style="display:flex;">
      <div style="flex:1;">
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen"
          @close="handleClose">
          <el-menu-item index="1">
            <el-icon><icon-menu /></el-icon>
            <template #title>常用</template>
          </el-menu-item>
          <el-menu-item index="2">
            <el-icon><icon-menu /></el-icon>
            <template #title>热门</template>
          </el-menu-item>
          <el-menu-item index="3">
            <el-icon>
              <document />
            </el-icon>
            <template #title>绘图</template>
          </el-menu-item>
          <el-menu-item index="4">
            <el-icon>
              <setting />
            </el-icon>
            <template #title>写作</template>
          </el-menu-item>
          <el-menu-item index="5">
            <el-icon>
              <setting />
            </el-icon>
            <template #title>编程</template>
          </el-menu-item>
          <el-menu-item index="6">
            <el-icon>
              <setting />
            </el-icon>
            <template #title>vvvv</template>
          </el-menu-item>
        </el-menu>
      </div>
      <div  style="flex:4;">
        <Main/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import Main from './main.vue'


const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

</script>
