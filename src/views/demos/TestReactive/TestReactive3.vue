<script setup>
    import {reactive} from 'vue'
    // import {describe, expect} from 'vitest'

    const obj = reactive({
        nested: { count: 0 },
        arr: ['foo','bar']
    })

    function mutateDeeply(params) {
        obj.nested.count ++
        obj.arr.push('baz')
    }

    
    /* 响应式代理 vs. 原始对象 */
    const raw = {}
    const proxy = reactive(raw)
    console.log(proxy === raw); // false
    console.log(reactive(raw) === proxy); //  true 在同一个对象上调用 reactive() 会返回相同的代理
    console.log(reactive(proxy) === proxy); //  true  在一个代理上调用 reactive() 会返回它自己
    
   /*  describe('test',()=>{
        expect(1+1).toBe(1)
    }) */

</script>
<template>
    <div>
        <p>深层响应性</p>
        <button @click="mutateDeeply">{{obj.nested.count}}</button>
        <span>{{obj.arr}}</span>
    </div>
  
</template>

<style scoped>

</style>
