<!-- <template>
	<el-dialog v-model="outerVisible" title="Outer Dialog" width="800" :before-close="onClose">
		<span>This is the outer Dialog</span>
		<template #footer>
		  <div class="dialog-footer">
		  </div>
		</template>
	  </el-dialog>
  </template>
  
  <script lang="ts" setup>
  import { ref,  watch } from "vue";
  
  const show = ref(false);
  const outerVisible = ref(false);
  
  watch(show,function (newVal) {
	console.log("newVal");
	outerVisible.value = newVal
  })
  </script>
  <style lang="scss" scoped>
	@import "./index.scss";
  </style>
   -->