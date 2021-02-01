<template>
	<div>
		<p>News</p>
	</div>
</template>

<script>
</script>

<style>
</style>
<template>
	<div>
		<ul>
			<li v-bind:class="{selcet_item:selectIndex === index}" v-for="(item,index) in newsList" @click="select(index)" :key="index">{{item.title}}</li>
		</ul>
		<button @click="deleteItem">删除</button>
	</div>
</template>

<script>
	import store from '../store/index.js'
	export default {
		data() {
			return {
				selectIndex: -1,
				newsList: store.state.newsList
			}
		},
		methods: {
			deleteItem:function() {
				// console.log('delete')
				store.commit('delete',this.selectIndex)
				this.newsList = store.state.newsList
			},
			select(index) {
				this.selectIndex = index
				console.log(this.selectIndex)
			}
		}
	}
</script>

<style>
	.selcet_item {
		background-color: #42B983;
	}
</style>
