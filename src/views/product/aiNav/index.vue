<template>
  <div id="app">
    <CategoryList
      v-for="item in navList"
      :title="item.name"
      :initial-items="item.list"
    />
    <!-- <CategoryList title="编程导航" :initial-items="programmingItems" /> -->
  </div>
</template>

<script setup>
import { ref } from "vue";
import CategoryList from "./CategoryList.vue";
import { onMounted } from "vue";
import axios from 'axios';

const navList = ref([
  /* {
    key: "ai",
    name: "AI",
    list: [
      { id: 1, name: "AI 网站1", url: "http://www.aiwebsite1.com" },
      { id: 2, name: "AI 网站2", url: "http://www.aiwebsite2.com" },
    ],
  },
  {
    key: "program",
    name: "编程开发",
    list: [
      {
        id: 1,
        name: "编程网站1",
        url: "http://www.programmingwebsite1.com",
      },
      {
        id: 2,
        name: "编程网站2",
        url: "http://www.programmingwebsite2.com",
      },
    ],
  },
 */]);

onMounted(async () => {
  // fetchCategories();
  try {
    const response = await axios.get('http://127.0.0.1:5000/get_nav_list');
    // 处理响应数据

    let navs =  response.data.map(item=>{
      item.list = JSON.parse(item.list)
      return item
    })

    navList.value = navs
    console.log( navList);
    
  } catch (error) {
    // 处理错误
    console.error('There was an error!', error);
  }
});

/* export default {
  components: {
    CategoryList,
  },
  data() {
    return {
      navList: [
        {
          key: "ai",
		  name:'AI',
          list: [
            { id: 1, name: "AI 网站1", url: "http://www.aiwebsite1.com" },
            { id: 2, name: "AI 网站2", url: "http://www.aiwebsite2.com" },
          ],
        },
        {
          key: "program",
		  name:'编程开发',
          list: [
            {
              id: 1,
              name: "编程网站1",
              url: "http://www.programmingwebsite1.com",
            },
            {
              id: 2,
              name: "编程网站2",
              url: "http://www.programmingwebsite2.com",
            },
          ],
        },
      ],
      aiItems: [
        { id: 1, name: "AI 网站1", url: "http://www.aiwebsite1.com" },
        { id: 2, name: "AI 网站2", url: "http://www.aiwebsite2.com" },
      ],
      programmingItems: [
        { id: 1, name: "编程网站1", url: "http://www.programmingwebsite1.com" },
        { id: 2, name: "编程网站2", url: "http://www.programmingwebsite2.com" },
      ],
    };
  },
}; */
</script>
