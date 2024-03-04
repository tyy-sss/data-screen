import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import DataVVue3 from "@kjgl77/datav-vue3";

const app = createApp(App);
app.use(store).use(router).use(DataVVue3).mount("#app");
