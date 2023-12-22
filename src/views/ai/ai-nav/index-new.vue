<template>
<div>
  <el-menu
    :default-active="activeMenu"
    class="el-menu-vertical-demo"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    collapse-transition="false"
  >
    <nav-menu-item v-for="menu in menus" :key="menu.id" :menu="menu"></nav-menu-item>
  </el-menu>
</div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-property-decorator';
import NavMenuItem from './MenuItem.vue';


@Options({
components: {
  NavMenuItem,
},
})
export default class NavMenu extends Vue {
menus = [
  {
    id: '1',
    title: '菜单 1',
    icon: 'el-icon-location',
    route: '/page1',
    children: [
      {
        id: '1-1',
        title: '子菜单 1-1',
        icon: 'el-icon-location',
        route: '/page1-1',
      },
      {
        id: '1-2',
        title: '子菜单 1-2',
        icon: 'el-icon-location',
        route: '/page1-2',
      },
    ],
  },
  { id: '2', title: '菜单 2', icon: 'el-icon-menu', route: '/page2' },
  { id: '3', title: '菜单 3', icon: 'el-icon-document', route: '/page3' },
];

activeMenu = '1';

handleSelect(key: string, keyPath: string[]) {
  console.log('Selected menu:', key, keyPath);
  this.activeMenu = key;
  this.$router.push(this.getMenuRoute(key));
}

getMenuRoute(key: string) {
  let menu = this.getMenuByKey(key);
  return menu ? menu.route : '';
}

getMenuByKey(key: string) {
  let menu = this.menus.find((menu) => menu.id === key);
  if (!menu) {
    this.menus.forEach((item) => {
      if (item.children && item.children.length) {
        menu = item.children.find((child) => child.id === key);
      }
    });
  }
  return menu;
}
}
</script>