<template>
	<div>
		<h2>首页</h2>
		<h3>count:{{this.$store.state.count}}</h3>
		<button @click="addtions">+</button>
		<button @click="sub">-</button>
		<button @click="multiply">*</button>
		<button @click="additionsAsyn">异步改变state</button>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			//1commit是普通提交风格
			//2特殊的提交风格(对象)
			addtions(){
				// this.$store.commit('countPlus',3)
				this.$store.commit({
					type:'countPlus',
					num:3
				})
			},
			sub(){
				this.$store.commit('countSub')
			},
			multiply(){
				const msg = this.$store.getters.countMultiply(2)//vuex getters的自定义传参
				console.log(msg)
			},
			additionsAsyn(){
				//调vuex中的actions函数，要用$store.dispatch进行调用；dispatch有返回值，可以使用promise函数式编程
				this.$store.dispatch('countPlusAsyn',{
					msg:'回调成功',
					success:function(){
						console.log('success')
					}
				})
				
				this.$store
				.dispatch('countPlusAsyn')
				.then(()=>{
					console.log('success')
				})
				
				
			}
		}
	}
</script>

<style>
</style>
