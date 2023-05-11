import { createRouter, createWebHistory } from "vue-router";
import Products from "../views/Products.vue";
import Home from "../views/Home.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			name: "Home",
			path: "/todo",
			component: Home,
		},
		{
			name: "Products",
			path: "/",
			component: Products,
		},
	],
});

export default router;
