<template>
  <div>
    <!-- 你的组件模板 -->
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import axios from 'axios';

onMounted(async () => {
  try {
    const response = await axios.get('http://127.0.0.1:5000/get_all');
    // 处理响应数据
    console.log(response.data);
  } catch (error) {
    // 处理错误
    console.error('There was an error!', error);
  }
});
</script>