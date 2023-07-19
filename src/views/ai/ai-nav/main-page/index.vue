<template>
  <div class="main" id="main">
    <Classify/>
  </div>
</template>

<script lang="ts">

// interface navData {}
// import { mounted } from "vue";
import { Options, Vue } from 'vue-class-component'

type EventName = "click" | "scroll" | "mouseover"; // 字符串字面量类型
import Classify from './classify'

@Options({
  name:'MainPage',
  components:{
    Classify
  }
})
export default class MainPage extends Vue {

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
