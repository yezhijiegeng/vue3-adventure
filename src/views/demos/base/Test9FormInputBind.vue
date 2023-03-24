<script setup>
import { ref, reactive, computed, onMounted } from "vue";

const checked = ref(true);

const checkedNames = ref(["John"]);

const picked = ref("One");
const pick = ref([]);
</script>
<template>
  <div>
    <h1></h1>
    <h2 class="title">复选框</h2>
    <input type="checkbox" id="checkbox" v-model="checked" />
    <label>{{ checked }}</label>
    <hr />

    我们也可以将多个复选框绑定到同一个数组或集合的值：
    <div>Checked names: {{ checkedNames }}</div>

    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
    <label for="jack">Jack</label>

    <input type="checkbox" id="john" value="John" v-model="checkedNames" />
    <label for="john">John</label>

    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
    <label for="mike">Mike</label>
    <hr />

    <h2>单选按钮</h2>
    <div>Picked: {{ picked }}</div>

    <input type="radio" id="one" value="One" v-model="picked" />
    <label for="one">One</label>

    <input type="radio" id="two" value="Two" v-model="picked" />
    <label for="two">Two</label>
    <hr />

    <h2>值绑定</h2>
    <!-- <input type="radio" v-model="pick" :value="second" /> -->
  </div>
</template>
<style></style>
