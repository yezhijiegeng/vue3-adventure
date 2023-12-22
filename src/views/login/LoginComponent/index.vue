<!-- LoginComponent.vue -->
<template>
  <div>
    <h2>Login</h2>
    <el-form @submit.native.prevent="submitLoginForm">
      <el-form-item label="Username">
        <el-input v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input v-model="loginForm.password" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitLoginForm">Login</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-property-decorator';
import UserService from '@/services/UserService';
import { log } from 'console';
import axios from 'axios';

@Options({
  components: {
  },
})
export default class LoginComponent extends Vue {
  loginForm = {
    username: '',
    password: '',
  };

  async submitLoginForm() {
    console.log('Login form values:', this.loginForm);
    const res = await UserService.fetchUsers();
    console.log("res:",res)
  }
}
</script>