<script setup></script>
<template>
	<div>
		<div class="flex justify-between px-14 py-3 bg-gray-800 items-center">
			<span class="text-white"> DARK / LIGHT</span>
			<i
				@click="theme.getTheme()"
				class="bx bx-sun text-5xl cursor-pointer text-zinc-200"></i>
		</div>
	</div>
</template>
<style></style>
