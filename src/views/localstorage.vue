<template>
	<div>
		<input v-model="content" type="text" />
		<van-button @click="save">存储</van-button>
		<van-button @click="show">展示</van-button>

		<van-list>
			<!-- <van-cell v-for="item in list" :key="item" :title="item" /> -->
			<van-cell v-for="(item,index) in local_contents" @click="selectItem(index)" :key="index">
				<template #title>
					<p v-bind:class="{checked:selectIndex === index}">{{item}}</p>
				</template>
			</van-cell>
		</van-list>

		<h2>接收到的参数为{{filename}}</h2>
		<h2>name:{{$route.query.name}}</h2>
		<h2>size:{{$route.query.size}}</h2>
		
		<router-view></router-view>
		
		<tabbar>
			<tabbaritem path='/locaslstorage/home2'>
				<img src="../images/home_check.png" slot='bottom-bar-item-img' />
				<div slot='bottom-bar-item-text'>
					首页
				</div>
			</tabbaritem>
			<tabbaritem path='/locaslstorage/takephoto'>
				<img  src="../images/order_check.png" slot='bottom-bar-item-img' />
				<div slot='bottom-bar-item-text'>
					拍一拍
				</div>
			</tabbaritem>
			<tabbaritem path='/locaslstorage/shopcart'>
				<img src="../images/shopcar_check.png" slot='bottom-bar-item-img' />
				<div slot='bottom-bar-item-text'>
					购物车
				</div>
			</tabbaritem>
		</tabbar>
	</div>
</template>

<script>
	import tabbar from '@/components/bottombar.vue'
	import tabbaritem from '@/components/bottom-bar-item.vue'
	
	export default {
		name:'localstorage',
		components:{
			tabbar,tabbaritem
		},
		created() {
			console.log('localstorage created')
		},
		
		destroyed() {
			console.log('localstorage destroyed')
		},
		
		data() {
			return {
				content: '',
				local_contents: [],
				selectIndex: 0,
				filename: this.$route.params.filename //获取动态路由传的para
			}
		},
		methods: {
			save: function() {
				console.log(this.content)
				alert(this.content)
				var d = localStorage.getItem('local_content')
				if (null == d) {
					var contents = new Array()
					contents.push(this.content)
					localStorage.setItem('local_content', JSON.stringify(contents))
					this.local_contents = contents
					// alert('添加成功！1')
				} else {
					var contents2 = JSON.parse(d)
					contents2.push(this.content)
					localStorage.local_content = JSON.stringify(contents2)
					this.local_contents = contents2
					// alert('添加成功！2')
				}

			},
			show: function() {
				var d = localStorage.getItem('local_content')
				if (d == null) {
					alert('没有数据！')
				} else {
					// alert(d)
					this.local_contents = JSON.parse(localStorage.getItem('local_content'))
				}
			},
			selectItem: function(index) {
				// alert('selectItem'+index)
				console.log()
				this.selectIndex = index
			},
			deleteItem: function() {
				console.log('deleteItem')
			}
		}
	}
</script>

<style>
	input {
		margin-left: 20px;
	}

	.checked {
		background-color: antiquewhite;
	}
</style>
