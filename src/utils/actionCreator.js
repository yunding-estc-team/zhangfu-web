import {Extra, User} from "./actionType";

export default class ActionCreator{

    static updateUser=(user)=>{
        return {
            type:User.UPDATE,
            payload:user,
        }
    };

    // change status
    static changeStatus=()=>{
        return {
            type:Extra.STATUS
        }
    }
}