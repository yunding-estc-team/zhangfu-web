import ActionCreator from "./actionCreator";
import {instance} from "../config/url";

export default class ReduxMap {
    // 常用映射方法
    static mapStateToProps=(state)=>{
        return{
            // user
            user:state.user,
            // competition
            competition:state.competition,
            // wiki
            wiki:state.wiki,
            // submit用户
            submitU:(url)=>{
                // 返回promise对象
                return instance.post(url,state.user);
            }
        }
    };

    // 常用的dispatch
    static mapDispatchToProps=(dispatch)=>{
        return{
            // 保存用户（非覆盖性）
            saveU:(event)=>{
                // todo test
                console.log({[event.target.id]:event.target.value});
                dispatch(ActionCreator.updateUser({[event.target.id]:event.target.value}))
            },
            // 更新状态
            saveS:(event)=>{
                dispatch(ActionCreator.changeStatus())
            }

        }

    };
}