<template>

	<van-tabs v-model="active" @change="onChange">
		<van-tab title="待确定">
			<h1 v-once>{{label}}</h1><!-- 之后的数据变更不会重新渲染 -->
			
			<title3 ref='title3' :name='barName' :likes='likes' msg='内容...' @msgClick='msgClick' @inputChanged='inputChanged'></title3>
			<button @click="getTitle3Instance">获得title3组件的实例</button>
		</van-tab>
		<van-tab title="待送达">0

			<h1 v-html="url"></h1>
			<!-- v-model双向绑定 -->
			<!-- v-model.lazy失去焦点或者回车 才更新变量-->
			<input placeholder="请输入文字" v-model.lazy="searchText" @input="inputChange" />
			<h2>{{searchText}}</h2>
			<input type="radio" id="male" value="男" name="sex" v-model="sex" />男
			<input type="radio" id='female' value="女" name="sex" v-model="sex" />女
			<select v-model="score">
				<option value="A">A</option>
				<option value="B">B</option>
				<option value="C">C</option>
			</select>
			<!-- v-model.number绑定变量的值都为number -->
			<input type="number" v-model.number="inputNum" />
			<h2>{{typeof inputNum}}</h2>
			<input v-model.trim="inputString" />
			<h2>{{inputString}}</h2>
		</van-tab>
		<van-tab title="待接单">
			<h1 v-text="label"></h1>
			<table>
				<tr>
					<th> </th>
					<th>名称</th>
					<th>出版时间</th>
					<th>价格</th>
					<th>数量</th>
					<th> </th>
				</tr>
				<tr v-for="(item,index) in books" :key="item">
					<th>{{index}}</th>
					<th>{{item.name}}</th>
					<th>{{item.date}}</th>
					<th>{{item.price.toFixed(2)}}</th>
					<th><button @click="addBookNum(index,1)">+</button>{{item.num}}<button @click="addBookNum(index,-1)">-</button></th>
					<th><button @click="removeBook(index)">移除</button></th>
				</tr>
			</table>
			<h2>总价{{getBooksPrice()}}</h2>
			<button @click="test2">高阶函数</button>
		</van-tab>
		<van-tab title="已完成" v-cloak>
			<!-- 插槽 -->
			<TopBar><span>插入内容1</span></TopBar>
			<TopBar><button>插入内容2</button></TopBar>
			<!-- 父组件填充子组件插槽并且使用子组件数据的使用方法 slot-scope-->
			<TopBar><button slot-scope='center' slot='center'>中间{{center.data[1]}}</button></TopBar>
			<button @click="getModule">获取module</button>
		</van-tab>
		<van-tab title="全部">
			<button @click="buttonClick" v-bind:class="getButtonCls()">按钮</button>
			<h1>{{label2}}</h1>
			<button @click="setComputed">计算属性set</button>
			<button @click="eventButton('xyk',$event)">获取event</button>
			<input @keyup.enter="keyupEnter" />
			<h1 v-show="true">helloworld</h1>//样式display:none
			<h1 v-if="false">helloworld</h1>//不存在于dom中
			<ul>
				<li v-for-key="(value,key) in info">{{key}}--{{value}}</li>
			</ul>

			<ul>
				<li style="height: 20px;" v-for="item in movies" :key="item">{{item}}</li>
			</ul>
			<button @click="pushMovie">Push</button>

		</van-tab>
	</van-tabs>
</template>


<script>
	import Vue from 'vue'
	import Title from '../components/title'
	import TopBar from '../components/topbar'
	// es6导入写法
	// import {flag,sum} from '../store/calu.js'
	// import {i} from '../store/calu.js'
	// import calu from '../store/calu.js'
	//导入所有export
	import * as calu from '../store/calu.js'

	export default {
		components: {
			title3:Title,
			TopBar
		},
		created() {

		},
		data() {
			return {
				barName:'自定义标题栏',
				likes:['篮球'],
				inputString: '',
				inputNum: 0,
				sex: '女',
				score: 'A',
				buttonStatus: 0,
				active: 0,
				label: "hello",
				url: '<a href="www.baidu.com">百度一下你就知道</a>',
				info: { 
					name: "xyk",
					age: 18
				},
				movies: ['星际穿越', '盗梦空间', '敦刻尔克', '信条'],
				books: [{
					name: '算法导论',
					date: '2006-9',
					price: 85.0,
					num: 0
				}, {
					name: 'UNIX编程艺术',
					date: '2016-5',
					price: 95.5,
					num: 0
				}, {
					name: '编程珠玑',
					date: '2008-1',
					price: 15.0,
					num: 0
				}, {
					name: '代码大全',
					date: '2005-1',
					price: 150.0,
					num: 0
				}],
				totalPrice: 0,
				searchText: ''
			}
		},
		computed: {
			//计算属性全写
			label2: {
				set(newValue) {
					this.label = newValue

				},
				get() {
					return '这是计算属性2' + this.label
				}
			},
			//计算属性简写
			labell() {
				return '这是计算属性' + this.label
			}
		},
		methods: {

			test() {
				let name = "xyk" //常量，用于if或for作用域
				const age = 18 //变量

				const person1 = { //es5写法
					name: name,
					age: age,
					sayHello: function() {
						console.log('hello')
					}
				}

				const person2 = { //es6增强写法
					name,
					age,
					sayHello() {
						console.log('hello')
					}
				}
			},

			setComputed() {
				this.label2 = 'world'
			},


			onChange(index) {
				console.log(index)
			},
			buttonClick() {
				if (this.buttonStatus === 0) {

					this.buttonStatus = 1
				} else {
					this.buttonStatus = 0
				}
			},
			getButtonCls() {
				return {
					button_blue: this.buttonStatus === 0,
					button_red: this.buttonStatus === 1
				}
			},

			eventButton(name, event) {
				console.log(event)
			},
			keyupEnter() {
				console.log('keyupenter!')
			},
			//可变参数
			sum(...numers) {
				console.log(numers)
			},
			pushMovie() {
				// 能做到响应式
				// this.movies.push('追随') 
				// this.movies.pop()<!-- 删除最后一个 -->
				// this.movies.shift()<!-- 删除第一个 -->
				// this.movies.unshift('aaa')<!-- 插入索引第一个 -->
				// this.movies.push('a','b','c')
				// this.sum(1,2,3) 
				//反转
				// this.movies.reverse()
				//也是响应式
				Vue.set(this.movies, 0, '齐天大亨')
			},
			addBookNum(index, num) {
				if (this.books[index].num >= 0 && this.books[index].num < 99) {
					this.books[index].num += num
				}
			},
			removeBook(index) {
				this.books.splice(index, 1)
			},
			getBooksPrice() {
				// let totoalPrice = 0

				// for (let i = 0; i < this.books.length; i++) {
				// 	totoalPrice += this.books[i].price * this.books[i].num
				// }

				return this.books.reduce((preValue, n) => preValue + (n.price * n.price), 0)
			},
			test2() {
				//高阶函数
				let num = [1, 4, 6, 87, 100, 151, 4548]
				//filter，返回值表示是否存在新的数组
				//map,返回值表示新的数据存在了新的数组
				//reduce,返回值为下一次回调的preValue值，用于统计
				// let total = num.filter(function(n) {
				// 	return n > 2
				// }).map(function(n){
				// 	return n*2
				// }).reduce(function(preValue,n){
				// 	return  preValue+n
				// },0)

				let total = num.filter(n => n > 2).map(n => n * 2).reduce((preValue, n) => preValue + n)
				console.log(total)
			},
			inputChange(event) {
				console.log(event)
			},
			msgClick(value){
				console.log('msgClick-father ' + value)
			},
			inputChanged(value){
				this.barName = value
			},
			getTitle3Instance(){
				//获取子组件的实例，有$childrent是一个数组；refs是一种属性在子组件标签上，用于标记，$refrs.标签名获取实例
				// let text = [0].getInputText()
				// console.log(this.$children)
				
				console.log(this.$refs.title3.getInputText())
			},
			getModule(){
				//common.js导入方式
				// var calu = require('../store/calu.js')
			
			var person = new calu.Person('123');
				person.say()
				
				console.log('获得calu模块的flag属性'+calu.flag+' -》'+calu.i+' '+calu.sum(1,3))
			},
			
		},
		filters: {
			// showPrice(price) {
			// 	return price0.
			// }
		}

	}
</script>

<!-- 模板分离写法1 -->
<!-- <script type="text/x-template" id="title2">
	<div>
		<p>123</p>
	</div>
</script> -->



<style>
	.button_blue {
		background-color: blue;
	}

	.button_red {
		background-color: red;
	}
</style>
