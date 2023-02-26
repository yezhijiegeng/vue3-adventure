<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <div class="wrapper">
      <HelloWorld msg="You did it!" class="danger" />
      <nav>
        <RouterLink to="/home">首页</RouterLink>
        <RouterLink to="/index">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/info">info</RouterLink>
      </nav>
      <nav>
        响应式基础：
        <RouterLink to="/TestReactive">Reactive</RouterLink>
        <RouterLink to="/TestReactive2">Reactive-setup</RouterLink>
        <RouterLink to="/TestReactive3">深层响应性</RouterLink>
        <RouterLink to="/Test4Computed">计算属性</RouterLink>
        <RouterLink to="/Test5ClassBindCss">Class 与 Style 绑定</RouterLink>
      </nav>
    </div>
    
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
  .danger {
    color:red;
  }
}
</style>
