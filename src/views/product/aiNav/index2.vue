<template>
  <div class="ai-nav">
    <!-- <h1>编程导航</h1> -->
    <ul class="nav-list">
      <li v-for="(item, index) in websites" :key="index">
        <a :href="item.url">{{ item.name }}</a>
        <el-icon :size="size" :color="color">
          <edit @click="editWebsite(item)"
        /></el-icon>
        <el-icon>
          <Delete @click="deleteWebsite(item)" />
        </el-icon>
      </li>
      <div>
        <el-icon><Plus @click="addWebsite" /></el-icon>
      </div>
    </ul>
    <el-dialog title="编辑网站" v-model="dialogVisible">
      <el-form :model="form">
        <el-form-item label="名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="链接">
          <el-input v-model="form.url"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="saveWebsite">保 存</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    let id = 3;
    const websites = ref([
      { id: 1, name: "网站1", url: "http://www.website1.com" },
      { id: 2, name: "网站2", url: "http://www.website2.com" },
    ]);

    const dialogVisible = ref(false);
    const form = ref({ id: null, name: "", url: "" });
    const editing = ref(false);

    function addWebsite() {
      form.value = { id: null, name: "", url: "" };
      editing.value = false;
      dialogVisible.value = true;
    }

    function editWebsite(website) {
      form.value = { ...website };
      editing.value = true;
      dialogVisible.value = true;
    }

    function deleteWebsite(website) {
      websites.value = websites.value.filter((w) => w.id !== website.id);
    }

    function saveWebsite() {
      if (editing.value) {
        const index = websites.value.findIndex((w) => w.id === form.value.id);
        websites.value[index] = { ...form.value };
      } else {
        id++;
        websites.value.push({ id, name: form.value.name, url: form.value.url });
      }
      dialogVisible.value = false;
    }

    return {
      websites,
      dialogVisible,
      form,
      addWebsite,
      editWebsite,
      deleteWebsite,
      saveWebsite,
    };
  },
};
</script>

<style lang="scss">
.ai-nav {
  .nav-list {
    display: flex;
    li {
      list-style: none;
      // text-decoration: none;
    }
  }
}
</style>
