import api, {instance} from "./url";

/**
 * 系统通知接口
 * @authot HaoJun
 */

export default class {

    // 获取系统通知列表
    getAnnounceList() {
        let data = {
            // 页码
            pageCurrent: "",
            // 每页显示条数
            pageSize: ""
        };
        instance.post(api.userAnnounce.getAnnounceList, data)
            .then(res => {
                // 输出传输内容
                console.log(res.data.data);
                // 显示状态码
                console.log(res.data.code);
                // 显示提示信息
                console.log(res.data.msg);
            });
    }

    // 读取详细信息
    readAnnounce() {
        let data = {
            // 消息Id
            id:"",
            // 已读
            hasRead:""
        };
        instance.post(api.userAnnounce.readAnnounce, data)
            .then(res => {
                // 输出传输内容
                console.log(res.data.data);
                // 显示状态码
                console.log(res.data.code);
                // 显示提示信息
                console.log(res.data.msg);
            });
    }

}