<template>
  <div id="app">
    <CategoryList v-for="item in navList" :title="item.name" :initial-items="item.list" />
    <!-- <CategoryList title="编程导航" :initial-items="programmingItems" /> -->
  </div>
</template>

<script>
import CategoryList from "./CategoryList.vue";

export default {
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
};
</script>
