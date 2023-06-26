<template>
  <div class="profile">
    <div>个人中心</div>
    <el-form :model="form" label-width="120px">
      <el-form-item label="Activity name">
        <el-input v-model="form.username" />
      </el-form-item>
      <el-form-item label="email">
        <el-input v-model="form.password" />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm(form.username, form.password)"
          >提交</el-button
        >
        <!-- <el-button>Cancel</el-button> -->
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts">
import { onMounted, computed, reactive, defineComponent } from "vue";

// import * as moment from "moment";
/* import * as bar from "@/types/foo/index.d.ts";
/* 
  const form = reactive({
    name: "",
    email: "",
  });
  
  const onSubmit = () => {
    console.log("submit!");
  }; */
// moment.foo();

/* import moment from "@/types/moment-plugin";
moment.foo(); */

export default defineComponent({
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },
  emits: {
    click: null,
    submit: ({ username, password }) => {
      if (username && password) {
        return true;
      } else {
        console.warn("Invalid submit login event!");
        return false;
      }
    },
  },
  methods: {
    submitForm(username, password) {
      this.$emit("submit", { username, password });
    },
  },
});
</script>
