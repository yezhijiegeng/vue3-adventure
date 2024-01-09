<template>
  <div>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="模型" name="model"></el-tab-pane>
      <el-tab-pane label="绘图创作" name="drawCreate"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { Options, Ref, Vue } from "vue-property-decorator";
import type { TabsPaneContext } from 'element-plus'

@Options({
  name: "AiHome",
  components: {},
})
export default class AiDraw extends Vue {
  activeName = "model";

  handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event);
  };
}
</script>
