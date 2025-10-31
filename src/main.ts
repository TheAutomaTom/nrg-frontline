import "./app/styles/index.scss";

import App from "./App.vue";
import { createApp } from "vue";
const _app = createApp(App);

import { createPinia } from "pinia";
_app.use(createPinia());

// import router from "./router";
// _app.use(router);

import { naiveComponents } from "./naive-components";
// naiveComponents.forEach((element) => {
//   _app.component(element.name, element.component);
// });
naiveComponents.forEach(({ name, component }) => {
  _app.component(name, component);
});

_app.mount("#app");
