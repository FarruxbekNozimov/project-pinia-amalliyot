import { reactive, computed } from "vue";
import { defineStore } from "pinia";

export const useTodoStore = defineStore("todo", () => {
	const state = reactive({
		todo: [],
		done: [],
	});

	const addDone = (todo) => {
		state.done.push(todo);
	};

	const addTodo = (todo) => {
		state.todo.push(todo);
	};

	const delTodo = (id) => {
		state.todo.splice(id, 1);
	};

	return { addTodo, delTodo, state, addDone };
});
