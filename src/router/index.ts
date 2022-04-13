import Home from "../components/Home.vue";
import Products from "../components/Products.vue";
import ProductPage from "../components/ProductPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/products", name: "products", component: Products },
  { path: "/gallery", name: "gallery", component: Products },
  { path: "/register", name: "register", component: Products },
  { path: "/product/:category/:id", name: "product", component: ProductPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;