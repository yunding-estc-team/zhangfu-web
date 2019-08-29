import React, { Component } from 'react';
import './index.css'
import { NavLink , Route , } from 'react-router-dom'
import UserApi from "../../../config/userApi";
import api from "../../../config/url";
import {AxiosInstance as instance} from "axios";
import {UserModel} from "../../../config/model";
import Tools from "../../../utils/Tools";
import ReduxMap from "../../../utils/ReduxMap";
import {connect} from "react-redux";

/**
 * @Data 2019年8月30日
 */
class List1 extends Component{
    // 判断用户名
    judge=(e)=>{
        let {setMsg,setU}=this.props;
        UserApi.judgeUser(e)
            .then(res=>{
                if(res.data.code!=="200"){
                   setMsg("输入非法的用户名");
                }else{
                    UserApi.exist(e)
                        .then(res=>{
                            if(res.data.code==="204"){
                                setMsg("用户名已存在");
                            }else{
                                // 消除异常信息,并保存到store中
                                setMsg("");
                                setU({address:e.target.value});
                            }
                        })
                }
            })
    };

    // 提交
    submit=()=>{
        let {user,setMsg}=this.props;
        api.register(user)
            .then(res=>{
                if (res.data.code === "200") {
                    setMsg("");
                } else {
                    setMsg("注册失败");
                }
            })
    }

    ;
    render(){
        // 获取redux中的数据
        let {user,saveU,sendCode,msg,setMsg}=this.props;
        return(
            <div className="list1">
                <div className="list-main">
                    <form action="">
                        <ul>
                            {/*输入手机号*/}
                            <li className="first"><input id={UserModel.address} type="text" placeholder="输入手机号" onChange={this.judge}/></li>
                            <li className="second">
                                {/*输入手机号验证码*/}
                                <span><input id={UserModel.code} type="text" placeholder="输入手机验证码" onChange={saveU}/></span><span><button onClick={sendCode}>获得验证码</button></span>
                            </li>
                            {/*输入密码*/}
                            <li className="third"><input type="text" placeholder="输入密码" id={UserModel.password} onChange={saveU}/></li>
                            {/*再次输入密码*/}
                            <li className="fourth"><input type="text" placeholder="再次输入密码" onChange={event => setMsg(Tools.checkoutPassword(event,user.password))}/></li>
                            <li className="fifth"><NavLink><button onClick={this.submit}>完成</button></NavLink></li>
                        </ul>
                    </form>
                </div>
            </div>
        )
     }
}

export default connect(ReduxMap.mapStateToProps,ReduxMap.mapDispatchToPropsU)(List1);