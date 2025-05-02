import "./assets/main.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import Draggable from "vuedraggable";
import piniaPersist from "pinia-plugin-persistedstate";
import App from "./App.vue";
import router from "./router";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const app = createApp(App);

// Create a pinia instance
const pinia = createPinia();

// Use the persisted state plugin on your pinia instance
pinia.use(piniaPersist);

// Now register the enhanced pinia instance with the app
app.use(pinia);
app.use(router);
app.use(ElementPlus);

// Globally register draggable if not auto-imported
app.component("draggable", Draggable);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.mount("#app");
