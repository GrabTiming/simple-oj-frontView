/*ʹ��axios��������*/
import axios from "axios";




function get(){
    // �����ַ������������ͷ; then �Ǵ����ؽ��
    axios.get("http://localhost:8080/hello",{
        params:{

        },
        headers:{}
    }).then(res => console.log(res));
}

function post(){
    // �����ַ�������壬������Ϣ; then �Ǵ����ؽ��
    axios.post("http://localhost:8080/post",
        {
        //�����������
        name:"zhangsan",
        age:18
    },
       {
        //����ͷ������
        params:{},
        headers:{}
    }

    )
        .then(res => console.log(res))
        .catch(err => console.log(err)); //�ɹ�
}