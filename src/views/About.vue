<template>
	<div class="about">
		<router-link :to="{name:'news'}"><button>新闻</button></router-link>
		<router-link :to="{name:'mine'}"><button>我的</button></router-link>
		<router-view></router-view>
		<!-- <bar2></bar2> -->
	</div>
</template>

<script>
	export default {
		data(){
			return{
				path:'/about/mine'
			}
		},
		
		created() {
			console.log('about created')
		},
		
		destroyed() {
			console.log('about destroyed')
		},
		activated() {//活跃状态下
			console.log('about activated')
			this.$router.push(this.path)
		},
		beforeRouteLeave(to,from,next) {
			console.log('about beforeRouteLeave')
			this.path = this.$route.path
			console.log(this.path)
			next()
		}
	}
</script>
