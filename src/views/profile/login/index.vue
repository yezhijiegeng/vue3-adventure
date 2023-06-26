<template>
  <div class="login-container">
    <el-card class="login-card">
      <h1 class="login-title">Login</h1>
      <el-form
        :model="form"
        :rules="rules"
        ref="form"
        label-width="80px"
        class="login-form"
      >
        <el-form-item label="Username" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">Login</el-button>
        </el-form-item>
      </el-form>
      <div v-if="error" class="login-error">{{ error }}</div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ElForm, ElFormItem, ElInput, ElButton, ElCard } from "element-plus";

export default defineComponent({
  name: "Login",
  components: {
    ElForm,
    ElFormItem,
    ElInput,
    ElButton,
    ElCard,
  },
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          {
            required: true,
            message: "Please input your username",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "Please input your password",
            trigger: "blur",
          },
        ],
      },
      error: "",
    };
  },
  methods: {
    async login() {
      try {
        // Call your login API with the username and password
        const response = await fetch("/api/login", {
          method: "POST",
          body: JSON.stringify({
            username: this.form.username,
            password: this.form.password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          // Redirect to the home page or dashboard
          this.$router.push("/");
        } else {
          // Display the error message returned by the API
          const data = await response.json();
          this.error = data.message;
        }
      } catch (error) {
        // Handle any other errors, such as network errors
        this.error = error.message;
      }
    },
  },
});
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-card {
  width: 400px;
  padding: 20px;
}

.login-title {
  text-align: center;
  margin-bottom: 20px;
}

.login-form {
  margin-top: 20px;
}

.login-error {
  color: red;
  margin-top: 10px;
}
</style>
