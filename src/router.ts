import { createRouter, RouteRecordRaw, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Acerca from "./pages/Acerca.vue";

let routes: RouteRecordRaw[] = [
  { name: "Home", path: "/", component: Home },
  { name: "Acerca", path: "/about", component: Acerca },
];

let Router = createRouter({
  history: createWebHistory(),
  routes,
});
export default Router;
