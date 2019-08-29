import {Extra, User, UserCompetition} from "./actionType";

export default class ActionCreator{

    static updateUser=(user)=>{
        return {
            type:User.UPDATE,
            payload:user,
        }
    };

    static saveUser=(user)=>{
        return {
            type:User.SAVE,
            payload:user,
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

    // 用户参赛数据保存
    static updateUserCompetition=(competition)=>{
        return {
            type:UserCompetition.SAVE,
            payload:competition,
        }
    }
}