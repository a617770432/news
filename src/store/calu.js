var flag = true

function sum(a, b) {
	return a + b
}

//commonjs导出语法
// module.exports = {
// flag: flag,
// }

export {
	flag,
	sum
}
export let i = 100

// 导出类,import可以将它实例化
export class Person {

	constructor(name) {

	}

	say() {
		console.log('hello world')

	}
}

//默认导出，一个js文件只能有一个，导入方自定义名称import aaa from '../xx.js'
export default {flag,
sum,
i,
Person
}
