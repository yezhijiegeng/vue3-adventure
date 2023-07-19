<template>
    <div class="ai-header">
        <div>
            桃子AI导航
        </div>
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
        >
            <el-menu-item index="1">首页</el-menu-item>
            <el-sub-menu index="2">
            <template #title>AI绘画教程</template>
            <el-menu-item index="2-1">stable diffusion</el-menu-item>
            <el-menu-item index="2-2">mid journey</el-menu-item>
            <el-menu-item index="2-3">ai绘画提示词</el-menu-item>
            <el-sub-menu index="2-4">
                <template #title>item four</template>
                <el-menu-item index="2-4-1">item one</el-menu-item>
                <el-menu-item index="2-4-2">item two</el-menu-item>
                <el-menu-item index="2-4-3">item three</el-menu-item>
            </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="3" disabled>Info</el-menu-item>
            <el-menu-item index="4">ai资讯</el-menu-item>
            <el-menu-item index="4">chatgpt快报</el-menu-item>
            <el-menu-item index="5" @click="toChatGpt">chatgpt</el-menu-item>
            <el-menu-item index="6">联系我</el-menu-item>
        </el-menu>
    </div>
</template>
<script lang="ts">
// import Vue from 'vue'
import { Options, Vue } from 'vue-class-component'
import { Prop } from 'vue-class-component'
import router from "@/router/index.js";

@Options({
    name:'AiHeader',
    components:{
    }
})
export default class AiHeader extends Vue {
    
    activeIndex: '1'

    handleSelect(key, keyPath) {
        console.log(key, keyPath);
    }
    toChatGpt(){
        router.push("/chatgpt");
    }
}

</script>
<style lang="scss" scoped>
@import './index.scss'
</style>