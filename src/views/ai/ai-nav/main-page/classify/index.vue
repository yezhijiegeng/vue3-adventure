<template>
  <div class="main" id="main">
    <div v-for="item in dataList" :key="item.id">
      <div class="title">{{ item.title }}</div>
      <div class="item-box">
        <div v-for="v in item.cardList" :key="v.id">
          <!-- <div class="item-box__item">文心一言</div> -->
          <CardTemp :info="v"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

// interface navData {}
// import { mounted } from "vue";
import { Options, Vue } from 'vue-class-component'
type EventName = "click" | "scroll" | "mouseover"; // 字符串字面量类型
import CardTemp from '@/components/CardTemp'

@Options({
  name:'MainPage',
  components:{
    CardTemp
  }
})
export default class Classify extends Vue {

  dataList: Array<object> = [
    {
      id: 1,
      icon: "icon1", // svg
      title: "ai热门项目",
      cardList: [
        {
          id: "1001",
          icon: "icon1",
          title: "ChatGpt",
          desc: "chatGpt4,全球最火ai",
        },
        {
          id: "1002",
          icon: "icon2",
          title: "文心一言",
          desc: "国内AI聊天工具",
        },
      ],
    },
    {
      id: 2,
      icon: "icon1",
      title: "ai聊天对话",
      cardList: [
        {
          id: "1001",
          icon: "icon1",
          title: "ChatGpt",
          desc: "chatGpt4,全球最火ai",
        },
        {
          id: "1002",
          icon: "icon2",
          title: "文心一言",
          desc: "国内AI聊天工具",
        },
      ],
    },
    {
      id: 3,
      icon: "icon1",
      title: "图形图像",
      cardList: [
        {
          id: "1003",
          icon: "icon3",
          title: "midjourney",
          desc: "智能图像转换工具",
        },
        {
          id: "1004",
          icon: "icon4",
          title: "stable defussion",
          desc: "开源的智能图像转换工具",
        },
      ],
    },
  ];

  handleEvent(ele: Element, event: EventName) {
    //
  }

  // handleEvent(document.getElementById("#main"), "mouseover");

  mounted() {
    //  this.handleEvent(document.getElementById("#main"), "click");
    
  }
  
}

</script>
<style lang="scss">
.main {
}
</style>
