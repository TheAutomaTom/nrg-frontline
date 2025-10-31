import { createRouter, createWebHistory } from "vue-router";
import CallApi from "../app/views/CallApi.vue";

const routes = [
  {
    path: "/",
    name: "call-api",
    component: CallApi,
    // props: true,
  },
];

export const router = createRouter({
  //
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory(),
  routes,
});
