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
    static getQuestions(c,p) {
        let data ={
            // 当前页数
            pageCurrent:c,
            // 每页展示条数
            pageSize:p
        };
        return instance.post(api.competitionWiki.getUserAsk,data)
    }

    // 组织用户进行回答
    static answerQuestions(wikiId,content){
        let data = {
            // 问题id
            competitionWikiId: wikiId,
            // 答案的内容
            content: content
        };
        return instance.post(api.competitionWiki.userAnswer, data)
    }

    // 赛事详情页面获取全部问答信息
    static getAllWiki(id,c,p) {
        let data = {
            // 赛事id
            competitionId: id,
            // 页码
            pageCurrent: c,
            // 每页显示条数
            pageSize: p,
        };
        return instance.post(api.competitionWiki.getAllWiki,data)
    }

}