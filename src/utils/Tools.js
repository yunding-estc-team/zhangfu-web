import {AxiosInstance as axios} from "axios";

export default class Tools{

// upload picture
    static upload=(file)=> {
        const pictureUrl = "https://sm.ms/api/upload";
        let form = new FormData();
        let config = {headers: {'Content-Type': 'multipart/form-data'}};
        console.log(file);
        form.append("smfile", file);
        return axios.post(pictureUrl, form,config);
    }

//    检验密码一致性
    static checkoutPassword=(event,password)=>{
        if (event.target.value === password) {
            return "";
        } else {
            return "密码不一致";
        }
    }

}