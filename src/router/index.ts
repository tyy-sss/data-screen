import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/allRank",
    name: "allRank",
    component: () => import("../views/RankAll.vue"),
  },
  {
    path: "/map",
    name: "map",
    component: () => import("../views/MapTest.vue"),
  },
  {
    path: '/compare',
    name: 'compare',
    component: () => import( '../views/CompareView.vue')
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
