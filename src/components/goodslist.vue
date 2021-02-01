<template>
	<div>
		<el-carousel height="150px">
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


					<van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
						<!-- <van-cell v-for="item in list" :key="item" :title="item" /> -->

						<van-cell   v-for="(item,index) in goodsTitleList[0].goodsDetailsList" :key="index">
							<!-- 使用 title 插槽来自定义标题 -->
							<template #title>

								<img :src="item.goodsImgUrl" style="width: 40px;float:left;" />

								<span style=" font-size: 10px;float: left;line-height: 40px;margin-left: 10px;">{{item.goodsName}}</span>

								<el-input-number style="width: 100px;float: right;" size="mini" v-model="item.num" @change="handleChange" :value="item.num"
								:min="0" :max="999" label=""></el-input-number>

							</template>
						</van-cell>
					</van-list>

				</el-main>


			</el-container>
		</el-container>
	</div>


</template>

<script>
	import axios from 'axios'
	import store from '@/store'

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
				loading: false,
				finished: false,
				page :0
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
					// console.log(JSON.stringify(res.data))
					// goodsTitleList[0].goodsDetailsList
					console.log('json:'+JSON.stringify(res.data.data[0].goodsDetailsList))
					this.goodsTitleList = res.data.data
					this.goodsTitleList[0].goodsDetailsList.concat(res.data.data[0].goodsDetailsList)
					// console.log(JSON.stringify(res.data.data))
					store.state.goodsTitleList = res.data.data
					
					this.loading =false
				})
			},
			onLoad(){
				// console.log('onLoad')
				// this.page++
				// if(this.page == 5){
				// 	this.finished = true
				// }
				// this.httpRequest()
			},
			handleChange(value) {
				console.log(JSON.stringify(this.goodsTitleList) + '     ' + value);
			},
			onChange(index) {
				if (index == 0) {
					this.$router.push('goodslist')
				}
				if (index == 1) {
					this.$router.push('shopcar')
					// this.$router.push({
					// 	name: 'shopcar'
					// })
				}
				if (index == 2) {
					this.$router.push('order')
					// this.$router.push({
					// 	name: 'order'
					// })
				}

			}
		}
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
