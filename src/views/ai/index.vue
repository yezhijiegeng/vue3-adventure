<template>
  <div>
    <!-- 头部菜单 -->
    <div>
      <span class="logo"  @click="menuClick('ai-nav')"></span>
      <!-- <span class="logo">达芬<span class="peach">桃</span>AI</span> -->
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
  tabPosition:string="left";

  menuClick(val:string){
    if(val === 'chat'){
      // this.router.push({ path: '/chat' });
      window.open('http://localhost:3000/','_blank')
    }else if(val === 'draw'){
      this.router.push({ path: '/draw' });
    }else if(val === 'ai-nav'){
      
      this.router.push({ path: '/ai-nav' });
    }
  }
}
</script>
<style lang="scss">

// ----------------- 这个设很美-----------------
/* CSS样式设计： */
.logo {
  font-family: 'Arial', sans-serif; /* 根据需求选择适合的字体，比如更具艺术感的手写体或衬线体 */
  font-size: 30px; /* 根据实际大小调整 */
  color: #E91E63; /* 粉色主题，可以根据网站风格更换颜色 */
  text-align: center;
  line-height: 1; /* 调整行高以优化垂直居中 */
  letter-spacing: 2px; /* 字间距，增加设计感 */
  margin: 0; /* 清除默认外边距 */
  padding: 10px 0; /* 上下内边距，微调垂直位置 */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* 添加阴影效果，增强立体感 */
  margin-right: 12px;
  /* 变形动画（可选） */
  // transition: all 0.3s ease-in-out;
}

/* 对特定文字进行特殊处理，例如将“AI”突出显示 */
.logo::before {
  content: "达芬桃";
}
.logo::after {
  content: "AI";
  font-size: 35px;
  color: #FFC107; /* 更改“AI”的颜色，使其更加突出 */
  margin-left: 5px;
}

/* 为鼠标悬停添加交互效果 */
.logo:hover {
  color: #F44336;
  transform: translateY(-2px);
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.7);
}

// ----------------------------------

// .logo {
//     font-family: 'Arial Black', Gadget, sans-serif; /* 字体 */
//     font-size: 28px; /* 字体大小 */
//     color: #E91E63; /* 字体颜色 */
//     text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* 文字阴影 */
//     letter-spacing: 2px; /* 字母间距 */
//     text-align: center; /* 文字居中 */
//     display: inline-block; /* 行内块级元素 */
//     padding: 5px 10px; /* 内边距 */
//     background-color: #fff; /* 背景颜色 */
//     border-radius: 5px; /* 边框圆角 */
//     box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* 盒子阴影 */
// }

/* CSS样式设计： */
// .logo {
//   font-family: 'SimHei', sans-serif; /* 使用黑体或自定义黑体字体名称 */
//   font-size: 30px;
//   color: #E91E63; /* 其他字的颜色（这里假设为深灰色） */
//   text-align: center;
//   line-height: 1;
//   letter-spacing: 2px;
//   margin: 0;
//   padding: 10px 0;

//   display: inline-flex;
//   align-items: center;
// }

// .peach {
//   background-color: #E91E63; /* 背景颜色为粉色 */
//   padding: 0 5px;
//   margin: 0 3px;
//   border-radius: 5px; /* 添加圆角以获得更好视觉效果 */
//   color: #fff; /* 继承父元素的颜色（即白色） */
//   font-weight: bold; /* 粗体显示 */
// }

// /* 鼠标悬停时添加交互效果（整个Logo） */
// .logo:hover {
//   transform: translateY(-2px);
//   text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.7);
// }

</style>