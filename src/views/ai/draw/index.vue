<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="模型" name="model"></el-tab-pane>
      <el-tab-pane label="绘图创作" name="drawCreate"></el-tab-pane>
    </el-tabs>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Options, Ref, Vue } from "vue-property-decorator";
import type { TabsPaneContext } from "element-plus";
import { useRouter } from "vue-router";
import { log } from "console";

@Options({
  name: "AiHome",
  components: {},
})
export default class AiDraw extends Vue {
  // activeName = "model";
  router = useRouter();

  activeName: "model";
  handleClick(tab, event) {
    // console.log(tab, event);
    //这样才能获取每个el-tab-pane的name属性
    const name = tab.props.name
    console.log(name);
  
    this.router.push({ name: name });
  }

  mounted(): void {
      this.activeName ="model";
  }
}
</script>
