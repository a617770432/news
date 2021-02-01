<template>
	<div>
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
		
		<!-- <ul style="margin: 0 auto;display: table;padding: 0;text-align: center;">
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
								<el-input-number style="width: 100px;" size="mini" v-model="item.num"  :value="item.num"
								:min="0" :max="999" label=""></el-input-number>
							</div>
						</el-col>
					</el-row>

				</div>

			</li>
		</ul> -->
	</div>
</template>

<script>
 import store from '@/store'
	export default {
	data() {
		return{
			goodsTitleList:store.state.goodsTitleList,
			loading: true,
			finished: true
		}
	},
	methods:{
		
	}
}
</script>

<style>
</style>
