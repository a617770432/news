import axios from 'axios'

export function request(config,query){
	const axios1 = axios.create({
		baseURL:'https://test.kwwdqd.com',
		params:query
	})
	return axios1(config)//return的是promise
}