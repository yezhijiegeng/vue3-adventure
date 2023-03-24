import ComponentA from "./ComponentA.vue";
import ComponentB from "./ComponentB.vue";

function plugins(Vue: any) {
  Vue.component("component-a", ComponentA);
  Vue.component("component-b", ComponentB);
}

export default plugins;
