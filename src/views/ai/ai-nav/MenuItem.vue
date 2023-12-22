<template>
<div>
  <el-menu-item
    v-if="!menuItem.children"
    :index="menuItem.name"
  >
    <i :class="menuItem.icon"></i>
    <span slot="title">{{ menuItem.title }}</span>
  </el-menu-item>
  <el-sub-menu
    v-else
    :index="menuItem.name"
  >
   <template slot="title">
      <i :class="menuItem.icon"></i>
      <span>{{ menuItem.title }}</span>
    </template>
    <menu-item
      v-for="item in menuItem.children"
      :key="item.id"
      :menu-item="item"
    ></menu-item>
  </el-sub-menu>
</div>
</template>
<script>
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class MenuItem extends Vue {
@Prop({ type: Object, required: true }) menuItem!: any;
}
</script>