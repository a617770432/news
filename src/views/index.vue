<template>
	<div id="app">
		<div id="nav">
			<router-link tag="button" to="/home" replace>Home</router-link> |
			<router-link to="/about" replace>About</router-link>|
			<router-link to="/test" replace>Test</router-link>|
			<router-link to="/axios" replace>Axios</router-link>|
			<!-- query传参 -->
			<router-link :to="{path:'/locaslstorage',query:{name:filename,size:'10MB'}}" replace>本地存储</router-link>

			<!-- <button@click="locaslstorage">本地存储</button> -->

			<!-- 组件缓存 exclude和include 是否要缓存的组件-->
			<keep-alive exclude="localstorage">
				<router-view />
			</keep-alive>
		</div>

	</div>
</template>

<script>
	export default {
		created() { //创建组件回调

		},
		mounted() { //挂载到DOM上回调

		},
		updated() { //更新界面回调

		},
		destroyed() { //组件销毁

		},
		beforeRouteLeave() {
			
		},activated() {
			
		},

		computed: {
			filename() {
				return 'xuyanke1'
			}
		},

		methods: {
			locaslstorage() {
				console.log('filename:' + this.filename)
				//动态路由传参
				// this.$router.replace("/locaslstorage/"+this.filename)

				this.$router.replace({
					path: '/locaslstorage',
					query: {
						name: this.filename,
						size: '10MB'
					}
				})
			}
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
		color: #42B983;
	}
</style>
