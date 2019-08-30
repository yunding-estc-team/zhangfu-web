import {connect} from "react-redux/es/alternate-renderers";

export default function reducer(state,action) {
    switch (action.type) {
        // 保存,会顶替属性
        case "U_SAVE":
            // 覆盖之前的user
            return {...state,user:action.payload};
        // 更新会附加属性
        case "U_UPDATE":
            return {user: Object.assign({},state.user,action.payload)};
        // 清空user
        case "U_CLEAR":
            return {user:{}};
        case "C_SAVE":
            return action.payload;
        // 变化状态
        case "E_STATUS":{
            return {status:!state.status}
        }
        // 设置消息
        case "E_M_SET":{
            return {...state,msg:action.payload}
        }
        default:
            console.log("default");
            return {
                user:{name:""},
                status:true
            };
    }
}
