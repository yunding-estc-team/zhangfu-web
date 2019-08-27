export default class ActionCreator{

    static updateUser=(user)=>{
        return {
            type:"U_UPDATE",
            payload:user,
        }
    };
}