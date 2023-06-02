<script setup>
import { ref } from "vue";

const message = ref("hello world!");

function reverseMessage() {
  message.value = message.value.split("").reverse().join("");
}
function notify() {
  alert("navigation is prevent");
}
</script>
<template>
  <h1>{{ message }}</h1>
  <button @click="reverseMessage">reverse message</button>

  <button @click="message += '!'">Append "!"</button>

  <a href="https://vuejs.org" @click.prevent="notify"
    >a link with e.preventDefault</a
  >
</template>
<style>
button,
a {
  display: block;
  margin-bottom: 1em;
}
</style>
