import React, { Component } from 'react';
import './index.css'

// 找回密码
class Find extends Component{
    render(){
        return(
            <div className="find">
                <div className="find-box">
                    <div className="find-header">忘记密码</div>
                    <div className="find-input">
                        <input type="text" placeholder="请输入手机号"/>
                        <input type="text" placeholder="请输入验证码"/>
                        <button>获得验证码</button>
                        <input type="text" placeholder="请输入新密码"/>
                        <input type="text" placeholder="请确认新密码"/>
                    </div>
                    <div className="find-button">
                        <button>重新登录</button>
                    </div>
                </div>
            </div>
        )
     }
}

export default Find