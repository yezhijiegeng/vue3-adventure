<template>
  <div>
    <h1>{{ title }}</h1>
    <el-button type="primary" @click="addWebsite">添加网站</el-button>
    <div class="website-list">
      <div v-for="website in websites" :key="website.id" class="website-item">
        <a :href="website.url" target="_blank">{{ website.name }}</a>
        <el-icon :size="size" :color="color">
          <edit @click="editWebsite(website)"
        /></el-icon>
        <el-icon>
          <Delete @click="deleteWebsite(website)" />
        </el-icon>
        <!-- <el-tooltip content="编辑" placement="top">
          <i class="el-icon-edit" @click="editWebsite(website)"></i>
        </el-tooltip>
        <el-tooltip content="删除" placement="top">
          <i class="el-icon-delete" @click="deleteWebsite(website)"></i>
        </el-tooltip> -->
      </div>
      <div>
        <el-icon><Plus @click="addWebsite" /></el-icon>
      </div>
    </div>

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
  /* defineProps({
		title:{
			type:String,
			default:''
		}
	}) */
  props: {
    title: String,
  },
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

<style scoped>
.website-list {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
}

.website-item {
  display: flex;
  align-items: center;
  margin-right: 20px;
  margin-bottom: 20px;
}

.website-item i {
  margin-left: 5px;
  cursor: pointer;
}

.website-item .el-icon-edit {
  color: #409eff;
}

.website-item .el-icon-delete {
  color: #f56;
}
</style>
