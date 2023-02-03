import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

/* 处理错误 */
app.config.errorHandler = (err) => {
    console.log("处理错误");
    
}

/* 挂载2个vue 应用 */
/* import InfoView from './views/InfoView.vue'
const app2 = createApp(InfoView)
app2.mount('#app2') */