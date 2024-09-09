<template>
  <div id="app">
    <el-button type="primary" @click="addCategory">添加分类</el-button>
    <CategoryList
      v-for="item in navList"
      :nav="item"
      :title="item.cateName"
      :initial-items="item.list"
      @optNav="optNav"
      @deleteType="deleteType"
      @updateType="updateType"
    />
    <!-- <CategoryList title="编程导航" :initial-items="programmingItems" /> -->
  </div>

  <el-dialog :title="dialogTitle" v-model="dialogVisible">
    <el-form :model="categoryForm">
      <el-form-item label="分类名称">
        <el-input v-model="categoryForm.cateName"></el-input>
      </el-form-item>
     <!--  <el-form-item label="分类Code">
        <el-input v-model="categoryForm.code"></el-input>
      </el-form-item> -->
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="onSubmit">保 存</el-button>
    </span>
  </el-dialog>
</template>

<script setup>
import { ref } from "vue";
import CategoryList from "./CategoryList.vue";
import { onMounted } from "vue";
import axios from "axios";

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
 */
]);

const dialogTitle = ref("添加分类");
const dialogVisible = ref(false);
const categoryForm = ref({
  cateName: "",
  id:null,
  // code: "",
});

onMounted(async () => {
  // fetchCategories();
  // getNavList();
  getAllList();
});

const optNav = async (obj) => {
  const form = obj;
  let res = {};
  if (form.type === "add") {
    res = await axios.post("http://127.0.0.1:5000/add_website", {
      address_name: form.address_name,
      address: form.address,
      category_id: form.category_id,
    });
  } else if (form.type === "edit") {
    res = await axios.put("http://127.0.0.1:5000/update_website/" + form.id, {
      address_name: form.address_name,
      address: form.address,
    });
  } else if (form.type === "delete") {
    res = await axios.delete("http://127.0.0.1:5000/delete_website/" + form.id);
  }
  console.log("res:", res);
  debugger
  if(res.data.code===200){
    getAllList()
  }
};

const addCategory = async (form) => {
  dialogVisible.value = true;
  /*  const res = await axios.post("http://127.0.0.1:5000/add_nav", {
    name: form.name,
    list: [form.url],
  });
  console.log(res); */
};

const onSubmit = async (form) => {
  if (dialogTitle.value == "编辑分类") {
    onUpdate(form);
  } else {
    onAdd();
  }
};

const onAdd = async (form) => {
  const param = {
    name: categoryForm.value.name,
    type: categoryForm.value.code,
  };
  console.log("param", param);
  debugger;
  const res = await axios.post("http://127.0.0.1:5000/add_nav", param, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (res.data.code == 200) {
    dialogVisible.value = false;
    getNavList();
  }
};

const deleteType = async (id) => {
  const res = await axios.delete(`http://127.0.0.1:5000/delete_nav/${id}`);
  if (res.data.code == 200) {
    getNavList();
  }
};

/* const updateType = async (nav) => {
  debugger
  dialogTitle.value = "编辑分类";
  categoryForm.value.id = nav.id;
  categoryForm.value.name = nav.name;
  categoryForm.value.code = nav.type;
  dialogVisible.value = true;
}; */

const updateType = async (nav) => {
  debugger
  dialogTitle.value = "编辑分类";
  categoryForm.value.id = nav.ID;
  categoryForm.value.cateName = nav.cateName;
  dialogVisible.value = true;
};

const getAllList = async () => {
  try {
    const res = await axios.get("http://127.0.0.1:5000/get_cate_address");
    // 处理响应数据
    if (res.data.code === 200) {
      let navs = res.data.data.map((item) => {
        item.list = item.addressList;
        return item;
      });
      navList.value = navs;
      console.log(navList);
    }
  } catch (error) {
    // 处理错误
    console.error("There was an error!", error);
  }
};

const getNavList = async () => {
  try {
    const response = await axios.get("http://127.0.0.1:5000/get_nav_list");
    // 处理响应数据

    let navs = response.data.map((item) => {
      item.list = JSON.parse(item.list);
      return item;
    });

    navList.value = navs;
    console.log(navList);
  } catch (error) {
    // 处理错误
    console.error("There was an error!", error);
  }
};

const onUpdate = async (form) => {
  debugger
  const param = {
    name: categoryForm.value.cateName,
    // type: categoryForm.value.code,
  };
  console.log("param", param);
  console.log("form", form.id);
  debugger;
  const res = await axios.put(
    `http://127.0.0.1:5000/update_category/${categoryForm.value.id}`,
    param,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (res.data.code == 200) {
    dialogVisible.value = false;
    getNavList();
  }
};

// type:form.type

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
