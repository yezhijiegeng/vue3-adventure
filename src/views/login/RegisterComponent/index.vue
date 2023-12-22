<!-- RegisterComponent.vue -->
<template>
  <div>
    <h2>Register</h2>
    <el-form @submit.native.prevent="submitRegisterForm">
      <el-form-item label="Username">
        <el-input v-model="registerForm.username"></el-input>
      </el-form-item>
      <el-form-item label="Email">
        <el-input v-model="registerForm.email"></el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input v-model="registerForm.password" type="password"></el-input>
      </el-form-item>
      <el-form-item label="Confirm Password">
        <el-input v-model="registerForm.confirmPassword" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitRegisterForm">Register</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class RegisterComponent extends Vue {
  registerForm = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  submitRegisterForm() {
    console.log('Register form values:', this.registerForm);
  }
}
</script>