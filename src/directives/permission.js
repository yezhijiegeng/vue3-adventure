// directives/permission.js
 
// import { useUserStore } from '../store/userStore'; // 假设你有一个存储用户权限的 store
 
export default {
  mounted(el, binding) {
    const { value: permissionName } = binding;
 
    // 获取用户的权限列表，假设通过 store 获取
    // const userStore = useUserStore();
    // let permissions = userStore.permissions;
		let permissions = ['add','delete']; 
 
    if (!permissions.includes(permissionName)) {
      el.style.display = 'none'; // 如果没有权限，则隐藏按钮
    }
  },
  updated(el, binding) {
    const { value: permissionName } = binding;
 
    const userStore = useUserStore();
    const permissions = userStore.permissions;
 
    if (!permissions.includes(permissionName)) {
      el.style.display = 'none';
    } else {
      el.style.display = ''; // 如果有权限，则显示按钮
    }
  }
};