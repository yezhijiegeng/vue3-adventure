<template>
	<div>
	  <el-table :data="navigationList" style="width: 100%">
		<el-table-column prop="title" label="标题" width="180"></el-table-column>
		<el-table-column prop="url" label="网址" width="360"></el-table-column>
		<el-table-column label="操作" width="120">
		  <template #default="{ row }">
			<el-button @click="startEdit(row)" type="primary" size="small">编辑</el-button>
			<el-button @click="deleteNavigation(row)" type="danger" size="small">删除</el-button>
		  </template>
		</el-table-column>
	  </el-table>
  
	  <el-button @click="addNavigation" type="primary" style="margin-top: 20px">添加网址</el-button>
  
	  <el-dialog v-model="dialogVisible" title="编辑网址" :before-close="cancelEdit">
		<el-form :model="currentNavigation" label-width="80px">
		  <el-form-item label="标题">
			<el-input v-model="currentNavigation.title"></el-input>
		  </el-form-item>
		  <el-form-item label="网址">
			<el-input v-model="currentNavigation.url"></el-input>
		  </el-form-item>
		</el-form>
		<div slot="footer" class="dialog-footer">
		  <el-button @click="cancelEdit">取消</el-button>
		  <el-button type="primary" @click="saveNavigation">保存</el-button>
		</div>
	  </el-dialog>
	</div>
  </template>
  
  <script>
  import { ref } from "vue";
  
  export default {
	setup() {
	  const navigationList = ref([
		{ id: 1, title: "Google", url: "https://www.google.com" },
		{ id: 2, title: "Vue.js", url: "https://vuejs.org" },
	  ]);
	  const dialogVisible = ref(false);
	  const currentNavigation = ref({});
  
	  function addNavigation() {
		currentNavigation.value = { id: Date.now(), title: "", url: "" };
		dialogVisible.value = true;
	  }
  
	  function startEdit(navigation) {
		currentNavigation.value = { ...navigation };
		dialogVisible.value = true;
	  }
  
	  function deleteNavigation(navigation) {
		navigationList.value = navigationList.value.filter((item) => item.id !== navigation.id);
	  }
  
	  function saveNavigation() {
		const index = navigationList.value.findIndex((item) => item.id === currentNavigation.value.id);
		if (index !== -1) {
		  navigationList.value.splice(index, 1, currentNavigation.value);
		} else {
		  navigationList.value.push(currentNavigation.value);
		}
		dialogVisible.value = false;
	  }
  
	  function cancelEdit() {
		dialogVisible.value = false;
	  }
  
	  return {
		navigationList,
		dialogVisible,
		currentNavigation,
		addNavigation,
		startEdit,
		deleteNavigation,
		saveNavigation,
		cancelEdit,
	  };
	},
  };
  </script>