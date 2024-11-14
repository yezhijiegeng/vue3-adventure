<template>
    <div class="page">
        <relatonCom></relatonCom>
    </div>
</template>
<script setup>
import relatonCom from './component/relatonCom.vue';
const props = defineProps({})
// onMounted(() => { })
</script>
<style lang='scss' scoped>
    .page{
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
</style>