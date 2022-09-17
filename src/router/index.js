import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/products",
    name: "Products",
    component: () => import("../views/ProductsView.vue"),
  },
  {
    path: "/past-orders",
    name: "PastOrders",
    component: () => import("../views/PastOrdersview.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
