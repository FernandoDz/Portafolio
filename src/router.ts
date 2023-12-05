import { createRouter, RouteRecordRaw, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Acerca from "./pages/Acerca.vue";
import Contact from "./pages/Contact.vue"
import  Project from './pages/Projects.vue'

let routes: RouteRecordRaw[] = [
  { name: "Home", path: "/", component: Home },
  { name: "Acerca", path: "/about", component: Acerca },
  { name: "Contact", path: "/contact", component: Contact },
  { name: "Projects", path: "/projects", component: Project }
];

let Router = createRouter({
  history: createWebHistory(),
  routes,
});
export default Router;
