import api, {instance} from "./url";

/**
 * 消息接口
 * @authot HaoJun
 */

export default class {

    // 个人用户进行提问
    static askQuestions(data) {

        return instance.post(api.competitionWiki.askQuestions, data)
    }

    // 组织用户获取提问
    getQuestions() {
        let data ={
            // 当前页数
            pageCurrent:"1",
            // 每页展示条数
            pageSize:"3"
        };
        instance.post(api.competitionWiki.getUserAsk,data)
            .then(res => {
                // 展示后台传输的数据
                console.log(res.data.data);
                // 显示状态码
                console.log(res.data.code);
                // 针对状态码进行提示信息
                if(res.data.code===200){
                    this.setState({msg:"执行成功！"});
                    console.log(res.data.msg);
                } else {
                    this.setState({msg: "失败！"});
                    console.log(res.data.msg);
                }
            });
    }

    // 组织用户进行回答
    answerQuestions(){
        let data = {
            // 问题id
            competitionWikiId: "",
            // 答案的内容
            content: ""
        };
        instance.post(api.competitionWiki.userAnswer, data)
            .then(res => {
                // 输出传输内容
                console.log(res.data.data);
                // 显示状态码
                console.log(res.data.code);
                // 显示提示信息
                console.log(res.data.msg);
            });
    }

    // 赛事详情页面获取全部问答信息
    getAllWiki() {
        let data = {
            // 赛事id
            competitionId: "",
            // 页码
            pageCurrent: "",
            // 每页显示条数
            pageSize: ""
        };
        instance.post(api.competitionWiki.getAllWiki, data)
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