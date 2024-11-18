import axios from 'axios'
// ���ó�ʱʱ��
axios.defaults.timeout = 5000
// ����axiosʵ��
const util = axios.create({
    baseURL: 'http://localhost:7182', // ǰ׺
    timeout: 60000, // ����ʱʱ�����
    headers: {
        'Content-Type': 'application/json',
    },
})
export default util


// �޸ĺ��get������֧�ִ��ݶ������
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