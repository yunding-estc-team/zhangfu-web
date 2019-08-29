import {Competition, Extra, User, UserCompetition} from "./actionType";

export default class ActionCreator{

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
    }

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

    // 保存比赛（非覆盖）
    static updateCompetition=(c)=>{
        return {
            type:Competition.UPDATE,
            payload:c
        }
    };

    // 单独设施比赛
    static setCompetition=(c)=>{
        return {
            type:Competition.SET,
            payload:c
        }
    };

    // 清楚competition数据
    static cleatCompetition=()=>{
        return {
            type:Competition.CLEAR,
        }
    }
}