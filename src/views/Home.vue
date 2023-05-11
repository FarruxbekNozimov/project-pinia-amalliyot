<script setup>
import { ref } from "vue";
import { useTodoStore } from "@/stores/todo";

const store = useTodoStore();
const newTask = ref("");

const addDone = (todo) => {
	store.addDone(todo);
};

const add = () => {
	store.addTodo({
		title: newTask.value,
		complate: false,
	});

	newTask.value = "";
};

const del = (el) => {
	store.delTodo(el);
};
</script>
<template>
	<div class="bg-blue-500 w-full h-[100vh] p-5">
		<div
			class="w-[50%] text-center bg-slate-800 h-[90vh] mx-auto p-5 rounded-2xl">
			<div class="flex relative">
				<div class="mb-6 w-[100%]">
					<label
						for="text"
						class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>TODO APP</label
					>
					<input
						type="text"
						id="text"
						class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Add task"
						v-model="newTask" />
				</div>
				<button
					@click="add"
					type="button"
					class="absolute top-7 right-[-8px] text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
					ADD
				</button>
			</div>
			<div class="w-[100%] p-3 flex justify-around">
				<div class="text-3xl bg-green-500 text-white p-2 px-5 rounded-xl">
					DONE:
					{{ store.state.done.length }}
				</div>
				<div class="text-3xl bg-red-500 text-white p-2 px-5 rounded-xl">
					DOING: {{ store.state.todo.length - store.state.done.length }}
				</div>
			</div>
			<ul>
				<li
					class="mb-5 p-3 rounded-2xl text-2xl flex justify-between items-center bg-blue-400"
					v-for="(el, i) in store.state.todo"
					:class="el.complate ? 'opacity-50' : ' '">
					<span>{{ i + 1 }}.</span>
					<h2>{{ el.title }}</h2>
					<div class="flex justify-evenly w-[100px]">
						<button
							:disabled="el.complate"
							@click="
								(e) => {
									addDone(el);
									el.complate = true;
								}
							"
							class="inline-flex items-center px-2 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-full">
							<svg
								class="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
							</svg>
						</button>

						<button
							:disabled="el.complate"
							@click="del(i)"
							class="inline-flex items-center px-2 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-full">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
							</svg>
						</button>
					</div>
				</li>
			</ul>
		</div>
		<!-- <h2 v-if="!store.todo.length"></h2> -->
	</div>
</template>
<style lang=""></style>
