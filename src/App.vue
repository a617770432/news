<template>
	<div id="app">
		<div id="nav">
			<!-- <router-link to="/home">Home</router-link> |
			<router-link to="/about">About</router-link>|
			<router-link :to="{name:'test'}">Test</router-link>|
			<router-link  to="/axios">Axios</router-link> -->
		</div>
		<keep-alive exclude="localstorage">
			<router-view />
		</keep-alive>
	</div>
</template>

<script>
	export default {
		created() {
			this.$router.push({
				name: 'index'
			})
		}
	}
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

	#nav {
		padding: 30px;
	}

	#nav a {
		font-weight: bold;
		color: #2c3e50;
	}

	#nav a.router-link-exact-active {
		color: #42b983;
	}
</style>
