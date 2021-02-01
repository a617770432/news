<template>
	<div>
	<h2>购物车</h2>
	<button @click="hq">网络请求</button>
		
	</div>
</template>

<script>
	import axios from 'axios'
	import {request} from '../store/request.js'
	
	//数组解构，对象解构
	const obj = {name : 'xyk',age:18}
	const {name,age} = obj
	console.log(name+' '+age)
	const names = ['xyk','wwz','ggs']
	const [name1,name2,name3] = names
	console.log(name1+' '+name2+' '+name3)
	
	//全局axios配置， axios实例是不会使用全局配置
	axios.defaults.baseURL ='https://test.kwwdqd.com'
	axios.defaults.timeout =5000
	
	export default{
		methods:{
			hq(){//axios支持promise
				// axios({
				// 	url:'https://test.kwwdqd.com/api/order/cBanner/getList',
				// 	// query参数
				// 	params:{
				// 		type:'1',
				// 		page:1
				// 	}
				// }).then(res=>{
				// 		console.log(res)
				// })
				
				//并发请求
				// Promise.all([
				// 	axios({
				// 		baseURL:'https://test.kwwdqd.com',
				// 		url:'/api/order/cBanner/getList',
				// 		timeout:5000,//超时毫秒
				// 		// query参数
				// 		params:{
				// 			type:'1',
				// 			page:1
				// 		}
				// 	}),
				// 	axios({
				// 		baseURL:'https://test.kwwdqd.com',
				// 		url:'/api/order/cBanner/getList',
				// 		// query参数
				// 		params:{
				// 			type:'1',
				// 			page:1
				// 		}
				// 	})
				// ])
				//两个请求结果，res是数组
				// .then(res=>{
				// 	console.log(res[0])
				// 	console.log(res[1])
				// })
				// 也可以使用axios.spread展开
				// .then(axios.spread((res1,res2)=>{
				// 	console.log(res1)
				// 	console.log(res2)
				// }))
				
				//创建axios实例，用于区别不同的axios配置
				// const axios1 = axios.create({
				// 	baseURL:'https://test.kwwdqd.com',
				// })
				
				// axios1({
				// 	url:'/api/order/cBanner/getList',
				// 	timeout:5000
				// }).then((res)=>{
				// 	console.log(res)
				// })
				
				//使用自己封装的axios
				// request({
				// 	url:'/api/order/cBanner/getList',
				// 	timeout:5000
				// },{
				// 	type:'2',
				// 	page:1
				// }).then(res=>{
				// 	console.log(res)
				// }).catch(err=>{
					
				// })
				
				//axios拦截器
				const axios2 = axios.create({
					baseURL:'https://test.kwwdqd.com'
				})
				//请求拦截器
				axios2.interceptors.request.use(config=>{//请求成功回调
					console.log(config)
					return config
				},err=>{//请求失败回调
					console.log(err)
				})
				
				//响应拦截器
				axios2.interceptors.response.use(res=>{//响应成功回调
					console.log(res)
					return res
				},err=>{//响应失败回调
					console.log(err)
				})
				
				axios2({
					url:'/111/order/cBanner/getList1111',
					timeout:5000
				}).then(res=>{
					console.log(res)
				})
			}
		}
	}
</script>

<style>
</style>
