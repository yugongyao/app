// 引入axios插件
import axios from 'axios'

// 设置请求的域名
import HOST from ''

// 构建一个Http类，包含许多Http类的静态方法，以便直接调用（不用new实例）
export default class Http{

	// 发送请求的配置
	static async request (method, url, data){
		// response是三次握手建立连接后，服务器给客户端的响应成功或响应失败的回应
		const response = await axios.request({
			method,
			url,
			baseURL: HOST,
			// 只有GET请求会在url中携带参数
			params: method==='GET' ? data : null,
			// data是POST请求携带的参数
			data: method==='POST' ? data : null
		})

		// 判断请求是否成功，成功才可以return，否则抛出error
		return this.isSuccess(response);
	}

	// 判断响应是否成功
	static isSuccess(res){
		// 响应成功
		if(res.status >= 200 && res.status < 300){
			return res;
		} else {
			// 响应失败，抛出error
			this.requestExpection(res);
		}
	}

	// 构建失败对象
	static requestExpection(res){
		throw new Error(res);
	}

	// get方法
	static get(url, data){
		return this.request('GET', url, data);
	}

	// post方法
	static get(url, data){
		return this.request('POST', url, data);
	}


}