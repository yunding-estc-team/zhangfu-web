import React, { Component } from 'react';
import './index.css';
import {Link} from "react-router-dom";

// 找回密码
class Find extends Component{
    render(){
        let {submitU,saveU,sendCode,msg,checkoutPassword}=this.props;
        return(
            <div className="find">
                <div className="find-box">
                    <div className="find-header">忘记密码</div>
                    <div className="find-input">
                        <input type="text" placeholder="请输入手机号" id="address" onChange={saveU}/>
                        <input type="text" placeholder="请输入验证码" id="code" onChange={saveU}/>
                        <button onClick={sendCode}>获得验证码</button>
                        <input type="text" placeholder="请输入新密码" onChange={saveU}/>
                        <input type="text" placeholder="请确认新密码" onChange={checkoutPassword}/>
                        // todo msg输入框
                        // todo 没有提交按钮
                    </div>
                    <div className="find-button">
                        <Link to="/login/index">
                            <button>重新登录</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
     }
}

export default Find