import "./styles/index.css";

import App from "./App.vue";
import { createApp } from "vue";
const app = createApp(App);

import { createPinia } from "pinia";
app.use(createPinia());

import router from "./router";
app.use(router);

app.mount("#app");
