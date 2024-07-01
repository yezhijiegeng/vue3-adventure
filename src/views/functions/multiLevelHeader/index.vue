<template>
	<div>
	  <el-table :data="state.tableData.data"
				v-loading="state.tableData.loading"
				stripe
				border>
		<template v-for="(item) in state.tableData.header">
		  <!-- 使用递归组件渲染表头 -->
		  <RecursiveTableHeader :header="item" :property="property" />
		</template>
	  </el-table>
	</div>
  </template>
  
  <script setup lang="ts">
  import {reactive} from 'vue';
  // 引入组件
  import RecursiveTableHeader from "@/components/RecursiveTableHeader.vue";
  import {header,tableData} from "@/utils/mock/tableheader";
  
  /**
   * 定义表头属性映射关系
   */
  const property = {
	prop: "column",
	label: "columnName",
	width: "width",
	children: "children",
  };
  
  const state = reactive({
	tableData: {
	  loading: false,
	  header:header,
	  data: tableData,
	}
  });
  </script>
  