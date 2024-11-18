
// 获取BUG信息
import request from "@/util/request";


export function login(user) {
    console.log(user.username, user.password);
    request.post("/user/login", user).then(r => console.log(r.data))
}