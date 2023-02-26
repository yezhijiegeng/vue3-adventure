<script setup>
    import { ref,reactive,computed } from 'vue'

    const isActive = ref(true)
    const hasError = ref(true)

    const classObject = reactive({
        active: true,
        'text-danger': true
    })

    const isActive1 = ref(true)
    const error1 = ref(null)
    const classObject1 = computed(()=>({
        active:isActive1.value && !error1.value,
        'text-danger': error1.value && error1.error1.value.type === 'fatal'
    }))
    
    const activeClass = ref("active")
    const errorClass = ref("text-danger")
    
</script>
<template>
    <div>
        <h4 class="title">绑定对象 </h4>
        <div
            :class="{ active: isActive, 'text-danger': hasError }"
            >绑定对象</div>
        <hr/>
        <h4 class="title"> 直接绑定一个对象：</h4>
        <div :class="classObject"></div>
        <hr/>
        <h4 class="title"> 绑定一个返回对象的计算属性:</h4>
        <div :class="classObject1"></div>
        <hr/>
        <h4 class="title">绑定数组 </h4>
        <div :class="[activeClass,errorClass]">绑定数组</div>
        <h4 class="title">在数组中使用三元表达式： </h4>
        <div :class="[isActive? activeClass:errorClass]">绑定数组</div>
        <hr/>
        <h4 class="title">组件的 $attrs 属性(见HelloWorld 组件) </h4>
        <hr/>
        
        
    </div>
  
</template>
<style>
    .text-danger {
        color :yellow;
    }
    .active {
        width: 100px;
        height: 100px;
        background: green;
    }
</style>


