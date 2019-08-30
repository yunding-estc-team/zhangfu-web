import {Competition, Extra, Search, User, UserCompetition, Wiki} from "./actionType";

export default class ActionCreator{

    /**
     * 用户
     * @param user
     * @returns {{payload: *, type: *}}
     */
    static updateUser=(user)=>{
        return {
            type:User.UPDATE,
            payload:user,
        }
    };

    // 清空状态保存
    static saveUser=(user)=>{
        return {
            type:User.SAVE,
            payload:user,
        }
    };

    // 清空user
    static cleatUser=()=>{
        return{
            type:User.CLEAR,
        }
    };

    // change status
    static changeStatus=()=>{
        return {
            type:Extra.STATUS
        }
    };
    // 阻止提交
    static prevented=()=>{

    };

    // 设置返回的消息
    static msgSuccess=(msg)=>{
        return {
            type:Extra.MsgSuccess,
            payload:msg,
        }
    };
    static msgFailure=(msg)=>{
        return {
            type:Extra.MsgFailure,
            payload:msg,
        }
    };

    /**
     * 用户参赛
     * @param competition
     * @returns {{payload: *, type: *}}
     */
    // 用户参赛数据保存
    static updateUserCompetition=(competition)=>{
        return {
            type:UserCompetition.SAVE,
            payload:competition,
        }
    };

    // 设置消息
    static setMsg=(msg)=>{
        return{
            type:Extra.M_SET,
            payload:msg
        }
    };

    /**
     * 比赛
     * @param c
     * @returns {{payload: *, type: *}}
     */
    // 保存比赛（非覆盖）
    static updateCompetition=(c)=>{
        return {
            type:Competition.UPDATE,
            payload:c
        }
    };

    // 单独设置比赛
    static setCompetition=(c)=>{
        return {
            type:Competition.SET,
            payload:c
        }
    };

    // 清除competition数据
    static cleatCompetition=()=>{
        return {
            type:Competition.CLEAR,
        }
    };

    // 设置赛事列表
    static updateCompetitionList=(cl)=>{
        return{
            type:Competition.SET_L,
            payload:cl,
        }
    };

    /**
     * 问答
     */

    // 问答 保存数据（非覆盖）
    static updateWiki=(w)=>{
        return{
            type:Wiki.UPDATE,
            payload:w,
        }
    }

    /**
     * 搜索
     */
    static updateSearch=(s)=>{
        return{
            type:Search.UPDATE,
            payload:s
        }
    }

}