<template>
  <div>
    <canvas id="myCanvas" width="500" height="500"></canvas>
    <el-button @click="draw(1)">横向平铺</el-button>
    <el-button @click="draw(2)">横向平铺</el-button>
    <el-button @click="draw(3)">横向平铺</el-button>
		<!-- <img src="https://gd-hbimg.huaban.com/2237776907169371846dfb9905bf03fcfe6443797919-ID4Sfx_fw1200webp" /> -->
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Prop, Watch } from "vue-property-decorator";

@Options({
  name: "Picture",
  component: {},
})
export default class Picture extends Vue {
  initCancas() {
    //  imagePattern.src = 'https://gd-hbimg.huaban.com/2237776907169371846dfb9905bf03fcfe6443797919-ID4Sfx_fw1200webp'
		// this.draw(1)
  }

  draw(value) {
		
    var myCanvas = document.getElementById("myCanvas");
    var ctx = myCanvas.getContext("2d");

    var img = new Image();
    img.src =
      "https://gd-hbimg.huaban.com/2237776907169371846dfb9905bf03fcfe6443797919-ID4Sfx_fw1200webp";

    img.onload = function () {
      if (value === 1) {
				ctx.fillStyle = ctx.createPattern(img,"repeat-x")
      }else if (value === 2) {
				ctx.fillStyle = ctx.createPattern(img,"repeat-y")
      }else if (value === 3) {
				ctx.fillStyle = ctx.createPattern(img,"repeat")
      }
			ctx.fillRect(0,0,myCanvas.width,myCanvas.height)
    };
  }

  mounted() {
    this.initCancas();
  }
}
</script>