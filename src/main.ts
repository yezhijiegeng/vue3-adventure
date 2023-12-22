import { createApp } from "vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
import router from "./router";
import plugins from "./components/common/index";
// import i18n from "./locals";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(ElementPlus);
app.use(plugins);
// app.use(i18n);

app.mount("#app");

/* 处理错误 */
app.config.errorHandler = (err) => {
  console.log("处理错误");
  console.log(err);
};

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// app.component("toDoDeleteButton",TodoDeleteButton);

/* 挂载2个vue 应用 */
/* import InfoView from './views/InfoView.vue'
const app2 = createApp(InfoView)
app2.mount('#app2') */
