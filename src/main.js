import './assets/main.css'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//持久化
import piniaPersist from 'pinia-plugin-persist'

//引入组件
import whjArticle from '@/components/whj-Article.vue'
import whjArticleList from '@/components/whj-ArticleList.vue'
import whjArticles from '@/components/whjArticles.vue'

// 创建实例
const pinia = createPinia()
const app = createApp(App);//确保 _use_ 路由实例使整个应用支持路由。

pinia.use(piniaPersist)
app.use(router);// 挂载router,完成
app.use(pinia);
app.mount('#app');

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }