import ActionCreator from "./actionCreator";
import api, {instance} from "../config/url";

export default class ReduxMap {
    // 常用映射方法
    static mapStateToProps=(state)=>{
        return{
            // user
            user:state.user,
            // competition
            competition:state.competition,
            // 赛事列表
            competitionList:state.competitionList,
            // wiki
            wiki:state.wiki,
            // 状态值
            status:state.status,
            // 后台返回的信息
            msg:state.msg,
        }
    };

    // 用户常用的dispatch
    static mapDispatchToPropsU=(dispatch,ownProps)=> {
        return {
            // 保存用户（非覆盖性）
            saveU: (event) => {
                dispatch(ActionCreator.updateUser({[event.target.id]: event.target.value}));
            },

            // 保存用户（覆盖）
            forceSaveU:(u)=>
               dispatch(ActionCreator.saveUser(u)),

            // 清空user
            clearU:()=>{
                dispatch(ActionCreator.cleatUser());
            },

            // 从后台获取用户
            getU:(url,param)=>{
                console.log("getU");
                instance.get(url,{params:param})
                    .then(res=>{
                        if(res.data.code==="200"){
                            dispatch(ActionCreator.saveUser(res.data.data));
                        }
                    })
            },

            // 设置user
            setU:(u)=>{
                   dispatch(ActionCreator.updateUser(u));
            },

            // 发送验证码
            sendCode:(address)=>{
                 console.log(address);
                let data={name:ownProps};
                instance.post(api.user.sendCode,data)
                    .then(res=>res.data.code==="200"
                    ?dispatch(ActionCreator.msgSuccess(res.data.msg))
                    :dispatch(ActionCreator.msgFailure(res.data.msg))
                    )
            },


            // 更新状态
            saveS: () => {
                dispatch(ActionCreator.changeStatus())
            },


            // 设置消息
            setMsg:(msg)=>{
                dispatch(ActionCreator.setMsg(msg));
            }

        };
    };

    // 用户参赛常用的dispatch
    static mapDispatchToPropsUC=(dispatch,ownProps)=>{
        return{
            // 不覆盖保存
            saveUC:(event)=>{
                dispatch(ActionCreator.updateUserCompetition(event.target.value))
            },

            // 提交用户赛事 submitUC
            submitUC:(url)=>{
                instance.post(url,ownProps)
                    .then(res=>res.data.code==="200"
                    ?dispatch(ActionCreator.msgSuccess(res.data.msg))
                    :dispatch(ActionCreator.msgFailure(res.data.msg))
                    )
            }
        }
    };

    // 赛事常用的dispatch
    static mapDispatchToPropsC=(dispatch,ownProps)=>{
        return {

            // 非覆盖更新
            saveC:(event)=>{
                dispatch(ActionCreator.updateCompetition({[event.target.id]:event.target.value}));
            },

            // 设置特定值
            setC:(c)=>{
                dispatch(ActionCreator.updateCompetition(c));
            },
        }
    }
}