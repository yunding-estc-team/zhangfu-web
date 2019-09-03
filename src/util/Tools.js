import {AxiosInstance as axios} from "axios";
import api, {instance} from "../config/url";
import ActionCreator from "../store/actionCreator";
import userApi from "../config/userApi";

export default class Tools{

// upload picture
    static upload=(file)=> {
        const pictureUrl = "https://sm.ms/api/upload";
        let form = new FormData();
        let config = {headers: {'Content-Type': 'multipart/form-data'}};
        console.log(file);
        form.append("smfile", file);
        return axios.post(pictureUrl, form,config);
    };

//    检验密码一致性
    static checkoutPassword=(event,password)=>{
        if (event.target.value === password) {
            return "";
        } else {
            return "密码不一致";
        }
    };

    // 发送验证码
    static sendCode=(address)=> {
        let url;
        userApi.judgeUser(address)
            .then(res => {
                console.log(res.data);
                switch (res.data.data) {
                    case "phone":
                        url = api.user.sendPhoneCode;
                        break;
                    case "email":
                        url = api.user.sendEmailCode;
                        break;
                    default:
                        url = "";
                }
                instance.post(url, {address: address})
                    .then(res=>{
                        if (res.data.code==="200"){
                            return "";
                        }else{
                            return "发送失败";
                        }
                        }

                    );
            })
    }

}