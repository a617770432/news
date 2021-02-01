<template>
	<div>
		<p>标题</p>
		<input type="text" v-model="title" />
		<p>内容</p>
		<input type="text" v-model="content" />
		<button @click='realease()'>发布</button>

	</div>
</template>

<script>
	import store from '@/store'
	export default {

		data() {
			return {
				title: '',
				content: ''
			}
		},
		methods: {
			realease() {
				store.commit('increase',{
					title:this.title,
					content:this.content,
				})
				this.title = ''
				this.content = ''
				this.$router.push({name:'news'})
				
			}
		}
	}
</script>

<style>
</style>
