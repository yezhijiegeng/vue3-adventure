<template>
  typescript
  <CustomInput/>
  <hr>
  <h1>简介</h1>
  <h2> 什么是 TypeScript</h2>
  <WhatTypescript/>
  <hr>
</template>

<script setup lang="ts" >
  import CustomInput from "@/components/compTypescript/index.vue";
  import WhatTypescript from './whatTypescript/index.vue'

  let foo = 1
  foo.split(' ') 
  

</script>