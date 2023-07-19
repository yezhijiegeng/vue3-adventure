<template>
    <div class="chatgpt">
        <!-- <iframe src="https://openai.com/blog/chatgpt" id="chatGpt"></iframe> -->
        <!-- <iframe style="width: 800px; height: 600px;" src="https://iwiki.woa.com/space/FinanceITFE"/>  可用 --> 
        <!-- <iframe style="width: 100%; height: 100vh;" src="https://feizhuke.com/"/> -->
        <iframe  src="https://feizhuke.com/" id="mobsf" scrolling="no" frameborder="0" style="position:absolute;top:64px;left: 240px;right:0px;bottom:100px;"></iframe>
        <!-- <iframe src="https://www.baidu.com/?tn=28114124_2_dg" id="mobsf" scrolling="no" frameborder="0" style="position:absolute;top:64px;left: 240px;right:0px;bottom:100px;"></iframe> -->
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
export default class Chatgpt extends Vue {
    
    mounted() {
         /**
            * iframe-宽高自适应显示   
            */
            function changeMobsfIframe(){
                const mobsf = document.getElementById('mobsf');
                const deviceWidth = document.body.clientWidth;
                const deviceHeight = document.body.clientHeight;
                mobsf.style.width = (Number(deviceWidth)-240) + 'px'; //数字是页面布局宽度差值
                mobsf.style.height = (Number(deviceHeight)-64) + 'px'; //数字是页面布局高度差
            }

            changeMobsfIframe()

            window.onresize = function(){
                changeMobsfIframe()
            }
    }
    
}

</script>
<style lang="scss" scoped>
// @import './index.scss'
</style>