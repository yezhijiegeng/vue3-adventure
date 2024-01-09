<template>
  <div>
    <!-- 头部菜单 -->
    <div>
      <el-button @click="menuClick('draw')">画画</el-button>
      <el-button @click="menuClick('chat')">聊天</el-button>
      <el-button @click="menuClick('nav')">应用中心</el-button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Options, Ref, Vue } from "vue-property-decorator";
import { useRouter } from "vue-router";

@Options({
  name: "AiHome",
  components: {},
})
export default class AiHome extends Vue {

  
  router = useRouter();
  tabPosition: "left";

  menuClick(val){
    if(val === 'chat'){
      debugger
      this.router.push({ path: '/chat' });
    }else if(val === 'draw'){
      debugger
      this.router.push({ path: '/draw' });
    }else if(val === 'nav'){
      debugger
      this.router.push({ path: '/ai-nav' });
    }
  }
}
</script>
