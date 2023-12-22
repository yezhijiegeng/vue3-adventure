<template>
   <div>
    <el-menu
      default-active="Home"
      class="el-menu-vertical-demo"
      @select="handleSelect"
    >
      <el-menu-item index="聊天">
        <i class="el-icon-location"></i>
        <span slot="title">聊天对话</span>
      </el-menu-item>
      <el-menu-item index="About">
        <i class="el-icon-menu"></i>
        <span slot="title">关于我们</span>
      </el-menu-item>
      <el-sub-menu index="2">
       <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <menu-item
          v-for="item in menuList"
          :key="item.path"
          :menu-item="item"
        ></menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-property-decorator';
// import { ElMenu, ElMenuItem, ElSubMenu } from 'element-plus';
import { useRouter } from 'vue-router';

@Options({
  name:'AiNav',
  components:{
  }
})
export default class AiNav extends Vue { 
  menuList:any = [
    {
      name: "聊天",
      path: "/ai/chat",
    },
    {
      name: "图形图像",
      path: "/testthree",
    },
    {
      name: "工具",
      // index: 2,
      children: [
        {
          name: "视频转文字",
          path: "/typescript",
        },
      ],
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

  router = useRouter();

  handleSelect(index: string) {
    debugger
    this.router.push({ name: index });
  }

  }

</script>
<style lang="scss" scoped>
.home {
}
</style>
