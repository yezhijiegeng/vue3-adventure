<template>
  <div class="models">
    <div>
      <el-input v-model="input" placeholder="输入模型名称" />
    </div>
    <div>
      <el-tag class="ml-2" type="info" v-for="(item, i) in tags" :key="i">{{
        item.name
      }}</el-tag>
    </div>
    <div class="picture">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="最新" name="new"></el-tab-pane>
        <el-tab-pane label="热门" name="hot"></el-tab-pane>
        <el-tab-pane label="喜欢" name="like"></el-tab-pane>
      </el-tabs>
    </div>
    <el-row>
    <el-col
      v-for="(o, index) in 2"
      :key="o"
      :span="8"
      :offset="index > 0 ? 2 : 0"
    >
      <el-card :body-style="{ padding: '0px' }">
        <img
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          class="image"
        />
        <div style="padding: 14px">
          <span>Yummy hamburger</span>
          <div class="bottom">
            <time class="time">{{ currentDate }}</time>
            <el-button text class="button">Operating</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
  </div>
</template>
<script>
import { Options, Ref, Vue } from "vue-property-decorator";
export default class Models extends Vue {
  // tabPosition: "left";
  // handleSelect(index: string) {
  //   console.log(index);
  // }
  tags = [
    { name: "全部" },
    { name: "SDXL 模型" },
    { name: "SD 模型" },
    { name: "SD 风格" },
  ];
  activeName = "hot";

  handleClick(tab, event) {
    const name = tab.props.name;
    console.log(name);
  }
}
</script>
<style lang="scss">
.models {
  .picture {
    .time {
      font-size: 12px;
      color: #999;
    }

    .bottom {
      margin-top: 13px;
      line-height: 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .button {
      padding: 0;
      min-height: auto;
    }

    .image {
      width: 100%;
      display: block;
    }
  }
}
</style>
