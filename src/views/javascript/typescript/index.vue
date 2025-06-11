<template>
  typescript
  <CustomInput/>
  <hr>
  <h1>简介</h1>
  <h2> 什么是 TypeScript</h2>
  <WhatTypescript/>

  <div>
    <button v-permission="'edit'" name="edit-button">Edit</button>
    <button v-permission="'delete'" name="delete-button">Delete</button>
    <button v-permission="'view'" name="view-button">View</button>
    <button v-permission="'add'" name="add-button">Add</button>
  </div>

  <hr>
</template>

<script setup lang="ts" >
  import CustomInput from "@/components/compTypescript/index.vue";
  import WhatTypescript from './whatTypescript/index.vue'

  let foo = 1
  foo.split(' ') 
  

</script>