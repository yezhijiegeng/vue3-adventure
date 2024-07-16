<template>
  <div>
    <!-- 你的组件模板 -->
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import axios from 'axios';

// 获取所有类别及其项目
/* const fetchCategories = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:5000/categories');
    categories.value = response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
};
 */


onMounted(async () => {
  // fetchCategories();
  try {
    const response = await axios.get('http://127.0.0.1:5000/get_nav_list');
    // 处理响应数据
    console.log(response.data);
  } catch (error) {
    // 处理错误
    console.error('There was an error!', error);
  }
});
</script>