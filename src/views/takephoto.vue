<template>
	<div>
	<h2>拍一拍</h2>
	<h3>count:{{$store.state.count}}</h3>
	<h2>{{$store.state.a.name}}</h2>
	<button @click="changeName">改变module state中的name</button>
	</div>
</template>

<script>
	setTimeout(() => {

	})
	
	
	// new Promise((resolve, reject) => {
	// 	//里面写异步操作,resolve,reject是函数，resolve可以传参表示处理，reject可以传参表示拒绝
	// 	//链式表达
	// 	console.log('step1')
	// 	resolve(2) //调resolve会回调 then里面的函数

	// }).then((msg)=>{
	// 	console.log('step'+msg)
	// 	return new Promise((resolve,reject)=>{
	// 		console.log('step3')
	// 		resolve(4)
	// 	})
	// }).then((msg)=>{
	// 	console.log('step'+msg)
	// 	return new Promise((resolve,reject)=>{
	// 		reject('error msg')
	// 	})
	// }).catch((error) =>{
	// 	console.log(error)
	// })
	
	// new Promise((resolve,reject)=>{
	// 	setTimeout(()=>{
			
	// 		// resolve() 
	// 		reject('err msg')
	// 	},1000)
	// }).then(()=>{//then里面有两个函数，第一个执行resolve，第二个执行reject
	// 	console.log('success')
	// },error=>{
	// 	console.log(error)
	// })
	
	// new Promise(resolve=>{//reject是可选参数
	// 	resolve(123)
		
	// }).then((num)=>{
	// 	return num+1
	// }).then(num=>{
	// 	console.log(num)
	// 	return Promise.resolve(num+1)
	// }).then(num=>{
	// 	console.log(num)
	// })
	
	//可放入多个promise
	Promise.all([
		new Promise((resolve,reject)=>{
			setTimeout(()=>{
				resolve('111')
			},2000)
		}),
		new Promise((resolve,reject)=>{
			setTimeout(()=>{
				resolve('222')
			},1000)
		})
	]).then(result=>{
		console.log(result)
	})
	
	export default{
		methods:{
			changeName(){
				this.$store.commit('updateName','yankexu')
			}
		}
	}
	
</script>

<style>
</style>
