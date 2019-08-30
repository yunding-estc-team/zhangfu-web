import React, { Component } from 'react';
import './index.css'
import '../../../common/Extra/msg.css'
import { NavLink , Route , } from 'react-router-dom'
import UserApi from "../../../config/userApi";
import api from "../../../config/url";
import {AxiosInstance as instance} from "axios";
import {UserModel} from "../../../config/model";
import Tools from "../../../utils/Tools";
import ReduxMap from "../../../utils/ReduxMap";
import {connect} from "react-redux";

/**
 *
 * @Data 2019年8月30日
 * @Data 2019年8月30日17点24分
 */
class List1 extends Component{
    // 判断用户名
    judge=(e)=>{
        let {setMsg,setU}=this.props;

        // 传输的数据
        let userName = e.nativeEvent.target.value;
        console.log("judge");
        console.log(userName);
        UserApi.judgeUser(userName)
            .then(res=>{
                if(res.data.code!=="200"){
                   setMsg("输入非法的用户名");
                }else{
                    console.log("judge");
                    UserApi.exist(userName)
                        .then(res=>{
                            if(res.data.code==="204"){
                                setMsg("");
                                setU({userName:userName})
                            }else{
                                setMsg("用户名已存在");
                            }
                        })
                }
            })
    };

    // 提交
    submit=()=>{
        let {user,setMsg}=this.props;
        UserApi.register(user)
            .then(res=>{
                if (res.data.code === "200") {
                    setMsg("");

                } else {
                    setMsg("注册失败");
                }
            })
    };

    // sendCode
    sendCode=()=>{
        let {setMsg,user}=this.props;
        console.log(user.userName);
        setMsg(Tools.sendCode(user.userName))
    };
    render(){
        // 获取redux中的数据
        let {user,saveU,msg,setMsg}=this.props;
        console.log(user);
        return(
            <div className="list1">
                <div className="list-main">
                        <ul>
                            {/*输入手机号*/}
                            <li className="first"><input id={UserModel.address} type="text" placeholder="输入手机号" onChange={this.judge}/></li>
                            <li className="second">
                                {/*输入手机号验证码*/}
                                <span><input id={UserModel.code} type="text" placeholder="输入手机验证码" onChange={saveU}/></span><span><button onClick={this.sendCode}>获得验证码</button></span>
                            </li>
                            {/*输入密码*/}
                            <li className="third"><input type="password" placeholder="输入密码" id={UserModel.password} onChange={saveU}/></li>
                            {/*再次输入密码*/}
                            <li className="fourth"><input type="password" placeholder="再次输入密码" onChange={event => setMsg(Tools.checkoutPassword(event,user.password))}/></li>
                            <span className="msgFailure">{msg}</span>
                            <li className="fifth"><NavLink><button onClick={this.submit}>完成</button></NavLink></li>
                        </ul>
                </div>
            </div>
        )
     }
}

export default connect(ReduxMap.mapStateToProps,ReduxMap.mapDispatchToPropsU)(List1);