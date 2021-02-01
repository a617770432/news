import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'
import home from '../views/Home.vue'
import add from '../views/add.vue'
import test from '../views/test.vue'

// import goodslist from '../views/goodslist.vue'
// import shopcar from '../views/shopcar.vue'
// import order from '../views/order.vue'

import mine from '../views/mine.vue'
import news from '../views/news.vue'
import localstorage from '../views/localstorage.vue'
import home2 from '../views/First.vue'
import shopcart from '../views/shopcart.vue'
import takephoto from '../views/takephoto.vue'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'index',
		component: index,
		mata: {
			title: '首页'

		},
		redirect: '/home', //重定向指定path
		children: [{
				path: '/home',
				name: 'home',
				component: home,
				mata: { //元数据
					title: '首页'

				}
			}, {
				path: '/about',
				name: 'About',
				mata: {
					title: '关于'

				},
				// route level code-splitting
				// this generates a separate chunk (about.[hash].js) for this route
				// which is lazy-loaded when the route is visited.
				component: () => import( /* webpackChunkName: "about" */ '../views/About.vue'),
				children: [{
						path: '/about/mine',
						name: 'mine',
						component: mine,
						meta: {
							title: '我的'
						},
					}, {
						path: '/about/news',
						name: 'news',
						component: news,
						meta: {
							title: '新闻'

						},

					},
					// {
					// 	path: '/',
					// 	redirect: '/about/news'
					// },
				]
			},
			{
				path: '/add',
				name: 'add',
				component: add,
				meta: {
					title: '添加新闻'

				},
				//独享守卫
				// beforeEnter:(to,from,next)=>{
				// 	console.log('拦截到添加新闻路由')
				// }
			},
			{
				path: '/test',
				name: 'test',
				component: test,
				meta: {
					title: '测试'
				},
			}, {
				path: '/axios',
				name: 'axios',
				//路由懒加载，提高运行速度
				component: () => import( /* webpackChunkName: "about" */ '../views/axios.vue'),
				meta: {
					title: '网络请求'
				},
				// children: [{
				// 	path: '/goodslist',
				// 	name: 'goodslist',
				// 	component:goodslist

				// }, {
				// 	path: '/shopcar',
				// 	name: 'shopcar',
				// 	component: shopcar
				// }, {
				// 	path: '/order',
				// 	name: 'order',
				// 	component: order
				// },{
				//       path: '/', 
				//       redirect: '/goodslist' 
				//   }]
			},
			// {
			// 	//动态路由
			// 	path: '/locaslstorage/:filename',
			// 	name: 'localstorage',
			// 	component: localstorage,
			// }
			, {
				path: '/locaslstorage',
				name: 'localstorage',
				component: localstorage,
				meta: {
					title: '本地存储'
				},
				children: [{
						name: home2,
						path: '/locaslstorage/home2',
						component: home2,
					},
					{
						name: shopcart,
						path: '/locaslstorage/shopcart',
						component: shopcart,
					},
					{
						name: takephoto,
						path: '/locaslstorage/takephoto',
						component:  takephoto,
					}
				]
			},
			// {
			// 	name: home2,
			// 	path: '/home2',
			// 	component: () => home,
			// },
			// {
			// 	name: takephoto,
			// 	path: '/takephoto',
			// 	component: () => takephoto,
			// }, {
			// 	name: shopcart,
			// 	path: '/shopcart',
			// 	component: () => shopcart,
			// }
		]
	},
]

const router = new VueRouter({
	mode: "history",
	routes //配置路由和组件之间的映射关系  
})

//全局路由守卫，监听路由变化。前置钩子Hook(回调)
router.beforeEach((to, from, next) => {
	console.log(to.meta.title)
	document.title = to.meta.title
	next(); //默认要调
})

//后置钩子
router.afterEach((to, from) => {

})

export default router
