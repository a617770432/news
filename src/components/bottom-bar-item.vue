<template>
	<div class="bottom-bar-item" @click="itemClick">
		<slot name="bottom-bar-item-img"></slot>
		<slot name="bottom-bar-item-text"></slot>
	</div>

</template>

<script>
	export default{
		name:'BottomBaritem',
		
		props:{
			path:String
		},
		
		methods:{
			itemClick(){
				console.log(this.path)
				this.$router.push({path:this.path})
			}
		}
	}
</script>

<style>
	.bottom-bar-item {
		flex: 1;
	}

	.bottom-bar-item img {
		width: 24px;
		height: 24px;
		vertical-align: middle;
	}
	
</style>
