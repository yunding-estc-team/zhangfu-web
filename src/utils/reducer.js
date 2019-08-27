import {connect} from "react-redux/es/alternate-renderers";

export default function reducer(state,action) {
    console.log(action);
    console.log(state);
    switch (action.type) {
        // 保存,会顶替属性
        case "U_SAVE":
            return action.payload;
        // 更新会附加属性
        case "U_UPDATE":
            return Object.assign(state.user,action.payload);
        case "U_TEST":
        case "C_SAVE":
            return action.payload;
        default:
            console.log("default");
            return {user:{name:""}};
    }
}
