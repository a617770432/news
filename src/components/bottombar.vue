<template>
	<div class="bottom-bar">
		<slot></slot>
	</div>
</template>

<script>
</script>

<style>
	.bottom-bar{
		display: flex;
		position: fixed;
		background-color: #fff8eb;
		left: 0;
		right: 0;
		bottom: 0;
		padding-top: 0px;
		padding-bottom: 3px;
	}
</style>
