import { createRouter, createWebHistory } from "vue-router";
import Signup from "../components/Signup.vue";
import Login from "../components/Login.vue";
import Home from "../components/Home.vue";
import Organization from "../components/Organization.vue";
import About from "../components/About.vue";

const routes = [
  { path: "/", redirect: "/signup" },
  { path: "/signup", component: Signup },
  { path: "/login", component: Login },
  { path: "/home", component: Home },
  { path: "/organization", component: Organization },
  { path:"/about", component:About}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
