import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import DataVVue3 from "@kjgl77/datav-vue3";
import axios from "axios";
import VueAxios from "vue-axios";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const app = createApp(App);
app
  .use(store)
  .use(router)
  .use(DataVVue3)
  .use(ElementPlus)
  .use(VueAxios, axios)
  .mount("#app");

// 统一注册Icon图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
