<template>
	<div>
		<h2>{{name}}</h2>
		<h2>{{likes}}</h2>
		<h2 @click="msgClick">{{msg}}</h2>
		
		<!--可以用 @input="inputChanged" 
			也可以用watch监听data数据变化
		-->
		<input  v-model="inputText" />
		<button @click="getFatherCompoent">访问父组件</button>

	</div>
</template>

<!-- 子组件向父组件传递数据,$emit；父组件向子组件，props -->

<script>
	export default {
		// props:['props1','props2']
		props: {
			//类型限制
			name: String,
			likes: Array,
			//提供默认值
			msg: {
				type: String,
				default: '缺省值...',
				required: true, //必须要传
			}
		},
		methods: {
			getInputText(){
				return this.inputText
			},
			msgClick() {
				console.log('msgClick-child')
				//this.$emit('方法名')发射事件，父组件v-on:方法名监听事件
				this.$emit('msgClick', "HelloWorld")
			},
			inputChanged(event) {
				this.inputText = event.target.value
				this.$emit('inputChanged', this.inputText)
			},
			getFatherCompoent(){
				//访问父组件
				console.log(this.$parent)
				//访问根组件
				console.log(this.$root)
				
			}
		},
		data() {
			return {
				inputText: '德玛西亚万岁'
			}
		},
		watch: {
			// inputText(newValue, oldValue) {
			// },

			inputText(newValue) {
				this.inputText = newValue
				this.$emit('inputChanged', this.inputText)
				// console.log('inputText changed '+newValue)
			}
		}

	}
</script>

<style>
</style>
