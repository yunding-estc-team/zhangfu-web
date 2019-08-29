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
        console.log("ownProps:"+ownProps);
        return {
            // 保存用户（非覆盖性）
            saveU: (event) => {
                // todo test
                console.log({[event.target.id]: event.target.value});
                dispatch(ActionCreator.updateUser({[event.target.id]: event.target.value}));
            },
            // 从后台获取用户
            getU:(url,param)=>{
                instance.get(url,{params:param})
                    .then(res=>{
                        if(res.data.code==="200"){
                            // todo
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

            // 检验密码一致性
            checkoutPassword:(e)=>{
            },
            // 更新状态
            saveS: () => {
                dispatch(ActionCreator.changeStatus())
            },

            // submit用户
            submitU: (url,data) => {
                if (data!==undefined) {
                    instance.post(url, data)
                }

                // 返回promise对象
                instance.post(url, ownProps.user)
                    .then(res => res.data.code === "200"
                        ? dispatch(ActionCreator.msgSuccess(res.data.msg))
                        : dispatch(ActionCreator.msgFailure(res.data.msg))
                    )

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
    }
}