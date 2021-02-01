<template>
	<div>
		<h1>topbar组件</h1>
		<!-- 允许有默认值，当中间无插入内容会使用默认值 -->
		<slot>
			<h1>默认值</h1>
		</slot>
		
		<div>
			<!-- slot的name命名用于指定替换的slot -->
			<slot name="left"><span>左</span></slot>
			<slot :data='langugue' name="center"><span>中</span></slot>
			<slot name="right"><span>右</span></slot>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				langugue:['java','javascript','c#','go','swift']
			}
		}
	}
</script>

<style>
	
</style>
