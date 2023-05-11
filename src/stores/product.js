import { defineStore } from "pinia";

export const useProductStore = defineStore("product", {
	data: () => ({
		products: [],
		load: true,
	}),

	actions: {
		async getProducts() {
			const data = await fetch("https://api.escuelajs.co/api/v1/products");
			this.products = await data.json();
			this.load = false;
			return this.products;
		},

		async deleteProducts(id) {
			this.products.slice(id, 1);
			await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
				method: "DELETE",
			});
		},

		async updateProducts(product) {
			this.products.slice(id, 1);
			await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
				method: "PUT",
				body: { ...product },
			});
		},
	},
});
