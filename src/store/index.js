import Vue from 'vue'
import Vuex from 'vuex'
import mutations from '../store/mutations'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		count: 1,
		newsList: [],
		goodsTitleList: []
	},
	mutations: mutations,
	actions: {
		//异步操作
		// countPlusAsyn(context,payload){
		// 	setTimeout(()=>{
		// 		console.log('context.push')
		// 		context.commit({//context相当于$store
		// 			type:'countPlus',
		// 			num:3
		// 		})
		// 		payload.success()
		// 	},1000)
		// }
		countPlusAsyn(context) {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					context.commit({ //context相当于$store
						type: 'countPlus',
						num: 5
					})
					resolve()
				},1000)
			})

		}

	},
	modules: {//模块
		a:{
			state:{
				name:'xuyanke'
			},
			mutations:{
				updateName(state,payload){
					state.name = payload
				}
			}
		},
		
	},
	getters: { //类似computed
		// countMultiply(state){//默认参数
		// 	return 'hello'
		// },
		// countMultiply2(state,getters){//可以有getters
		// 	return 'hello'+getters.countMultiply.length
		// },
		countMultiply(state) { //自定义参数return function带上参数
			return function(num) {
				return 'hello' + num
			}
		}
	},
})
