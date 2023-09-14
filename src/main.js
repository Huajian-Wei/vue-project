import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 创建实例
const app = createApp(App);//确保 _use_ 路由实例使整个应用支持路由。
app.use(router);// 挂载router,完成
app.mount('#app');
