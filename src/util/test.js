/*使用axios发送请求*/
import axios from "axios";




function get(){
    // 请求地址，参数，请求头; then 是处理返回结果
    axios.get("http://localhost:8080/hello",{
        params:{

        },
        headers:{}
    }).then(res => console.log(res));
}

function post(){
    // 请求地址，请求体，补充信息; then 是处理返回结果
    axios.post("http://localhost:8080/post",
        {
        //请求体的内容
        name:"zhangsan",
        age:18
    },
       {
        //请求头的内容
        params:{},
        headers:{}
    }

    )
        .then(res => console.log(res))
        .catch(err => console.log(err)); //成功
}