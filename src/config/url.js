import axios from 'axios';

const baseUrl="http://localhost:8080";
//todo 更改ip
// const baseUrl="http://192.168.0.111:8080";
export const api= {
    user:{
        // 用密码登录
        loginByPassword:"/shiro/loginByPassword",
        // 用验证码登录
        loginByCode:"/shiro/loginByCode",
        // 发送验证码
        sendCode:"/shiro/loginByCodeSend",
        // 注册接口
        register:"/user/register",
        // 检验账户类型
        checkAccountType:"/user/checkAccountType",
        // 检验账户存在性
        checkAccountExist:"/user/checkUser",
        // 个人信息获取
        info:"/user/info",
        // 修改公开信息
        updateInfo:"/user/updateInfo",
        // 修改敏感信息
        updatePrivateInfo:"/user/updatePrivateInfo",
        sendEmailCode:"/user/msg/email",
        sendPhoneCode:"/user/msg/phone",
        // 绑定邮箱
        checkCode:"/user/msg/checkCode",
        //无需输入手机号，给已绑定的手机号发送验证
        sendbindPhoneCode:"/user/msg/tokenPhone",
        //无需输入手机号，验证已绑定手机的验证码
        tokenCheckCode:"/user/msg/tokenCheckCode",
        //修改密码
        changePassword:"/user/changePassword",
        //忘记密码（手机）
        findPasswordByPhone:"/user/updatePasswordByPhone",
        //忘记密码（邮箱）
        findPasswordByEmail:"/user/updatePasswordByEmail",
        //学生获奖信息录入
        insertPrizeInfo:"/user/insertPrizeInfo",
        //搜索
        searchName:"/user/searchName",
        //搜索内容展示
        searchAll:"/user/searchByName",
        //获取历史获奖记录
        selectJoinCompetion:"/user/selectJoinCompetion"




    },

    /**
     * 个人中心消息部分
     * @author HaoJun
     */
    competitionWiki: {
        // 个人用户进行提问
        askQuestions: "/wiki/usersAsk",
        // 组织获取用户提问
        getUserAsk: "/wiki/getUsersAsk",
        // 组织用户回答用户提问
        userAnswer: "/wiki/usersAnswer",
        // 赛事详情页面获取全部问答
        getAllWiki: "/wiki/competitionGetAllWiki"
    },

    /**
     * 系统通知部分
     * @author HaoJun
     */
    userAnnounce:{
        // 获取系统通知
        getAnnounceList: "/userAnnounce/usersGetAnnounceList",
        // 获取消息详细信息并标记已读
        readAnnounce: "/userAnnounce/userReadAnnounce",
    },

    competition:{
        // 获取赛事详情
        getCompetitionInfo:"/competition/info",
        // 获取赛事排行
        getRank:"/competition/rank",
        // 认领赛事
        claim:"/competition/claim",
        // 获取点击量
        click:"/competition/clickCount",
        // 关注赛事
        attention:"/competition/attention",
        // 报名链接获取
        joinLink:"/competition/joinLink",
        // 获取赛事的评分
        hot:"/competition/hot",
        // 获取保研率
        rgr:"/competition/rgr"
    }
};
export var instance = axios.create({
    //写入token
    headers:{'Authorization':localStorage.getItem("token")===undefined?null:localStorage.getItem("token")},
    //基础地址
    baseURL:baseUrl,
});
export default api;