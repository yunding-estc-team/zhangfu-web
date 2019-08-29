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

}