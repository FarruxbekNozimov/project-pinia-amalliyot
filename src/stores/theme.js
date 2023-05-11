import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", {
	data: () => ({
		dark: true,
	}),

	actions: {
		async getTheme() {
			if (localStorage.theme == "true") {
				this.dark = false;
			} else {
				this.dark = true;
			}
			localStorage.setItem("theme", this.dark);
			return this.dark;
		},
	},
});
