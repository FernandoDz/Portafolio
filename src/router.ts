import { createRouter, RouteRecordRaw, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Acerca from "./pages/Acerca.vue";
import Contact from "./pages/Contact.vue"

let routes: RouteRecordRaw[] = [
  { name: "Home", path: "/", component: Home },
  { name: "Acerca", path: "/about", component: Acerca },
  { name: "Contact", path: "/contact", component: Contact },
];

let Router = createRouter({
  history: createWebHistory(),
  routes,
});
export default Router;
