<template>
    <div class="third-page">
        third-page
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
export default class ThirdPage extends Vue {
    
    
}

</script>
<style lang="scss" scoped>
@import './index.scss'
</style>