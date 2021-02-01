export default{
	increase(state, value) {
		state.newsList.push(value)
		console.log(this.state.newsList)
	},
	delete(state, index) {
		console.log('delete' + index)
		state.newsList.splice(index, 1)
	},
	countPlus(state, payload) {
		// state.count+=num
		state.count += payload.num
	},
	countSub(state) {
		state.count--
	}
}