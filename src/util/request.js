import axios from 'axios'
// 设置超时时间
axios.defaults.timeout = 5000
// 创建axios实例
const util = axios.create({
    baseURL: 'http://localhost:7182', // 前缀
    timeout: 60000, // 请求超时时间毫秒
    headers: {
        'Content-Type': 'application/json',
    },
})
export default util


// 修改后的get方法，支持传递多个参数
export function get(url, params = {}) {
    return util.get(url, { params });
}

export function post(url, data) {
    return util.post(url, data);
}

export function del(url){
    return util.delete(url);
}

export function put(url, data){
    return util.put(url, data);
}