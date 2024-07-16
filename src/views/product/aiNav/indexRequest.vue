<template>
  <div>
    <!-- 这里添加你的表单和列表渲染代码 -->
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const items = ref([]);

// 获取所有记录
axios.get('/get_all')
  .then(response => {
    items.value = response.data;
  })
  .catch(error => {
    console.error('There was an error!', error);
  });

// 添加记录的函数
const addItem = () => {
  // 获取表单数据并发送POST请求
  // ...
};

// 更新记录的函数
const updateItem = (item) => {
  // 发送PUT请求更新记录
  // ...
};

// 删除记录的函数
const deleteItem = (id) => {
  axios.delete(`/delete/${id}`)
    .then(() => {
      // 从列表中移除记录
      // ...
    });
};
</script>