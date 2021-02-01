<template>
	<div>
		
		<!-- <router-view ></router-view> -->
		
		
		<!-- <component :is="comName"></component> -->
		
		<goodslistCompoent v-show="comIndex == 0"></goodslistCompoent>
		<shopcarCompoent v-show="comIndex == 1"></shopcarCompoent>
		<orderCompoent v-show="comIndex == 2"></orderCompoent>
		
		<!-- <el-carousel height="150px">
			<el-carousel-item v-for="(item,index) in bannerList" :key="index">
				<img :src="item.imgUrl" style="width: 100%;height: 100%;" />
			</el-carousel-item>
		</el-carousel>

		<el-container>
			<el-aside width="20%">
				<ul style="margin: 0 auto;display: table;padding: 0;text-align: center;">
					<li v-for="(item,index) in goodsTitleList" :key="index">
						<p style="font-size: 13px;">{{item.seriesName}}</p>
					</li>
				</ul>
			</el-aside>
			<el-container>

				<el-main style="padding: 0px;">
					<ul style="margin: 0 auto;display: table;padding: 0;text-align: center;">
						<li class="goods" v-for="(item,index) in goodsTitleList[0].goodsDetailsList" :key="index">
							<div>
								<el-row>
									<el-col :span="4">
										<div>
											<img :src="item.goodsImgUrl" style="width: 40px;" />
										</div>
									</el-col>
									<el-col :span="8">
										<div>
											<span style="font-size: 10px;">{{item.goodsName}}</span>
										</div>
									</el-col>
									<el-col :span="8">
										<div>
											<el-input-number style="width: 100px;" size="mini" v-model="item.num" @change="handleChange" :value="item.num"
											:min="0" :max="999" label=""></el-input-number>
										</div>
									</el-col>
								</el-row>

							</div>

						</li>
					</ul>


				</el-main>


			</el-container>
		</el-container> -->

		<!-- <el-button type="primary" @click="httpRequest()">网络请求</el-button> -->

		<!-- <van-button type="primary">主要按钮</van-button> -->

		<van-tabbar v-model="active" @change="onChange">
			<van-tabbar-item icon="home-o">首页</van-tabbar-item>
			<van-tabbar-item icon="search">购物车</van-tabbar-item>
			<van-tabbar-item icon="friends-o">订单</van-tabbar-item>
		</van-tabbar>

	</div>
</template>

<script>
	import axios from 'axios'
	import store from '@/store'
	import goodslistCompoent from '../components/goodslist'
	import orderCompoent from '../components/order'
	import shopcarCompoent from '../components/shopcar'

	export default {
		created() {
			// axios.get('/url.json').then((res)=>{
			// 	console.log(res)
			// })
			
			axios({
				method: "get",
				url: "https://test.kwwdqd.com/api/order/cBanner/getList"
			}).then(res => {
				this.bannerList = res.data.data
				console.log(this.bannerList)

			})
			this.httpRequest()
			
		},
		data() {
			return {
				test: '123456',
				bannerList: [],
				selectTitleIndex: 0,
				goodsTitleList: [],
				active: 0,
				comName:'goodslistCompoent' ,
				comIndex:0
			}
		},
		methods: {
			httpRequest() {
				let token =
					'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBVVRIIiwiZFVzZXJpZCI6IjIxNjYiLCJpc3MiOiJLV1ctU0VSVklDRSIsImV4cCI6MTc3ODk4MDE3NSwiaWF0IjoxNjA2MTgwMTc1LCJqdGkiOiIwMDEiLCJ1c2VybmFtZSI6bnVsbH0.nxJTJ31LwvXMC47k4MeES3clGfQahJv758j31k0KNyA'
				axios({
					method: "get",
					headers: {
						'Authorization': token
					},
					url: "https://test.kwwdqd.com/api/order/dOrder/getDShopGoodsDetailsList"
				}).then(res => {
					this.goodsTitleList = res.data.data
					store.state.goodsTitleList = res.data.data
					// alert(JSON.stringify(res.data))
				})
			},
			handleChange(value) {
				console.log(JSON.stringify(this.goodsTitleList) + '     ' + value);
			},
			onChange(index) {
				if(index == 0){
					this.comName = 'goodslistCompoent'
					this.comIndex = 0
					// this.$router.replace('goodslist')
				}
				if(index == 1){
					this.comName = 'shopcarCompoent'
					this.comIndex = 1
					// this.$router.replace('shopcar')
				}
				if(index == 2){
					this.comName = 'orderCompoent'
					this.comIndex = 2
					// this.$router.replace('order')
				}
				
			}
		},
		components: {
			'goodslistCompoent':goodslistCompoent,
			'orderCompoent':orderCompoent,
			'shopcarCompoent':shopcarCompoent
		},
	}
</script>

<style>
	ul {
		float: left;
	}

	li {
		list-style-type: none;
		line-height: 60px;
	}

	li.goods {
		list-style-type: none;
		line-height: 60px;


	}

	.el-aside {

		color: #333;
		text-align: center;
		line-height: 200px;
	}

	.el-main {

		color: #333;
		text-align: center;
		line-height: 160px;
	}
</style>
