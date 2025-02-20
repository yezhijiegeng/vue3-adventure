<template>
  <div class="CategoryList">
    <div class="title">
      <h1>{{ title }}</h1>
      <el-icon :size="size" :color="color">
        <edit @click="updateType(website)" />
      </el-icon>
      <el-icon>
        <Delete @click="deleteType" />
      </el-icon>
    </div>
    <!-- <el-button type="primary" @click="addWebsite">添加网站</el-button> -->
    <div class="website-list">
      <div v-for="website in websites" :key="website.id" class="website-item">
        <a :href="website.address" target="_blank">{{
          website.address_name
          }}</a>
        <el-icon :size="size" :color="color">
          <edit @click="editWebsite(website)" />
        </el-icon>
        <el-icon>
          <Delete @click="deleteWebsite(website)" />
        </el-icon>
      </div>
      <div>
        <el-icon>
          <Plus @click="addWebsite" />
        </el-icon>
      </div>
    </div>

    <el-dialog :title="dialogTitle" v-model="dialogVisible">
      <el-form :model="form">
        <el-form-item label="名称">
          <el-input v-model="form.address_name"></el-input>
        </el-form-item>
        <el-form-item label="链接">
          <el-input v-model="form.address"></el-input>
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
    nav: Object,
  },
  watch: {
    nav:{
      handler(){
        console.log('nav change')
        this.websites = this.nav.addressList
      },
      deep:true
    }
  },
  setup(props, context) {
    let id = 3;
    /*   const websites = ref([
      { id: 1, name: "网站1", url: "http://www.website1.com" },
      { id: 2, name: "网站2", url: "http://www.website2.com" },
    ]); */

    const websites = props.nav.addressList;

    const dialogVisible = ref(false)
    const dialogTitle = ref('');
    const form = ref({ id: null, name: "", url: "" });
    const editing = ref(false);

    function addWebsite() {
      form.value = { id: null, name: "", url: "" };
      editing.value = false;
      dialogVisible.value = true;
      dialogTitle.value = '添加网址'
      // context.emit("addNav", form.value);
    }

    function editWebsite(website) {
      form.value = { ...website };
      editing.value = true;
      dialogVisible.value = true;
      dialogTitle.value = '编辑网址'
    }

    function deleteWebsite(website) {
      context.emit("optNav",
        {
          id: website.id,
          type: "delete"
        });
      // websites.value = websites.value.filter((w) => w.id !== website.id);
    }

    function deleteType() {
      context.emit("deleteType", props.nav.id);
    }

    function updateType() {

      context.emit("updateType", props.nav);
    }

    function saveWebsite() {
      if (editing.value) {
        const index = websites.findIndex((w) => w.id === form.value.id);
        websites[index] = { ...form.value };
        context.emit("optNav", {
          id: form.value.id,
          address_name: form.value.address_name,
          address: form.value.address,
          type: "edit",
        });
      } else {

        /*  id++;
         websites.push({ id, name: form.value.name, url: form.value.url }); */
        context.emit("optNav", {
          address_name: form.value.address_name,
          address: form.value.address,
          category_id: props.nav.ID,
          type: "add"
        });
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
      deleteType,
      updateType,
    };
  },
};
</script>

<style scoped lang="scss">
.CategoryList {
  .title {
    display: flex;
    // justify-content: ;
    align-items: center;

    .el-icon {
      margin-left: 10px;
    }
  }

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
}
</style>
