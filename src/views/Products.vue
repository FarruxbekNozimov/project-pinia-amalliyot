<script setup>
import { ref, onMounted, onUpdated } from "vue";
import { useProductStore } from "../stores/product";
import { useThemeStore } from "../stores/theme";

const store = useProductStore();
const theme = useThemeStore();
const isUpdate = false;

const deleteProducts = (id) => {
	store.deleteProducts(id);
};

onUpdated(() => {
	store.getProducts();
});

onMounted(() => {
	store.getProducts();
});
</script>
<template>
	<div v-if="store.load" class="h-screen bg-white">
		<div class="flex justify-center items-center h-full">
			<img
				class="h-16 w-16"
				src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif"
				alt="" />
		</div>
	</div>
	<div v-else>
		<div class="grid grid-cols-3 gap-4 p-5">
			<div v-for="el in store.products" class="w-[400px] h-[600px]">
				<div
					class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
					<a href="#!">
						<img
							class="rounded-t-lg w-[100%] h-[350px] object-cover"
							:src="el.images[0]"
							alt="" />
					</a>
					<div class="p-6">
						<div class="flex justify-between items-center">
							<h5
								class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
								{{ el.title }}
							</h5>
							<input
								:readonly="isUpdate"
								class="text-xl bg-inherit text-cyan-400 p-0 m-0 w-[50px] h-[20px]"
								:value="el.price" />
						</div>
						<p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
							{{ el.description }}
						</p>
						<div class="flex justify-between">
							<button
								@click="() => deleteProducts(el.id)"
								class="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md">
								🗑 Delete
							</button>
							<button
								@click="isUpdate = true"
								class="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-md">
								✏️ UPDATE
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style></style>
