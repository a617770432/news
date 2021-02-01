<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png">
		<HelloWorld msg="Welcome to Your Vue.js App231" />
		<Title></Title>
		
	</div>
</template>

<script>
	// @ is an alias to /src
	import Vue from 'vue'
	import HelloWorld from '@/components/HelloWorld.vue'
	
	export default {
		name: 'Home',
		components: {
			HelloWorld
		}
	}
</script>
