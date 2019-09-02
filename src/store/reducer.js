import {connect} from "react-redux/es/alternate-renderers";

const initState = {

    // 比赛列表
    competitionList:[],

    // 用户
    user:{

    },

    // 当前页数
    currentPage:1,

    // 比赛
    competition:{

    },

    // 搜索值
    search:"",

};

export default function reducer(state=initState,action) {
    console.log(action.type);
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
        // 设置赛事列表
        case "C_UPDATE_L":{
            return {...state,competitionList: action.payload}
        }
        // 设置当前页数
        case "E_CURRENT_PAGE":{
            return {...state,currentPage:action.payload}
        }
        // 存储搜索值
        case "S_UPDATE":{
            return {...state,search:action.payload}
        }
        default:
            console.log("default");
            return initState;
    }
}
