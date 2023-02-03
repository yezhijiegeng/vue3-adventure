<script setup>
    import {reactive} from 'vue'
    const state = reactive({count:0})

    function increment(params) {
        state.count ++
    }

</script>
<template>
    <div>
        <p>声明响应式状态</p>
        <button @click="increment">{{state.count}}</button>
    </div>
  
</template>

<style scoped>

</style>
