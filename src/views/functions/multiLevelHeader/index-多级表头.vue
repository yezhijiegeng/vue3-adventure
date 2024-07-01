<template>
	<el-table :data="tableData" style="width: 100%">
	  <el-table-column
		v-for="(header, index) in headers"
		:key="index"
		:label="header.label"
	  >
		<el-table-column
		  v-for="(subHeader, subIndex) in header.subHeaders"
		  :key="subIndex"
		  :label="subHeader.label"
		>
		  <el-table-column
			v-for="(subSubHeader, subSubIndex) in subHeader.subSubHeaders"
			:key="subSubIndex"
			:prop="subSubHeader.prop"
			:label="subSubHeader.label"
		  ></el-table-column>
		</el-table-column>
	  </el-table-column>
	</el-table>
  </template>
  
  <script>
  export default {
	data() {
	  return {
		headers: [
		  {
			label: 'Header 1',
			subHeaders: [
			  {
				label: 'Sub Header 1',
				subSubHeaders: [
				  { label: 'Sub Sub Header 1', prop: 'data1' },
				  { label: 'Sub Sub Header 2', prop: 'data2' }
				]
			  },
			  {
				label: 'Sub Header 2',
				subSubHeaders: [
				  { label: 'Sub Sub Header 3', prop: 'data3' },
				  { label: 'Sub Sub Header 4', prop: 'data4' }
				]
			  }
			]
		  },
		  {
			label: 'Header 2',
			subHeaders: [
			  {
				label: 'Sub Header 3',
				subSubHeaders: [
				  { label: 'Sub Sub Header 5', prop: 'data5' },
				  { label: 'Sub Sub Header 6', prop: 'data6' }
				]
			  },
			  {
				label: 'Sub Header 4',
				subSubHeaders: [
				  { label: 'Sub Sub Header 7', prop: 'data7' },
				  { label: 'Sub Sub Header 8', prop: 'data8' }
				]
			  }
			]
		  }
		],
		tableData: [
		  {
			data1: 'Data 1',
			data2: 'Data 2',
			data3: 'Data 3',
			data4: 'Data 4',
			data5: 'Data 5',
			data6: 'Data 6',
			data7: 'Data 7',
			data8: 'Data 8'
		  },
		  {
			data1: 'Data 9',
			data2: 'Data 10',
			data3: 'Data 11',
			data4: 'Data 12',
			data5: 'Data 13',
			data6: 'Data 14',
			data7: 'Data 15',
			data8: 'Data 16'
		  }
		]
	  };
	}
  };
  </script>