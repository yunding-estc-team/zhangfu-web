import React, { Component } from 'react';
import './index.css'
// 绑定邮箱账号
class Postbox extends Component{
    render(){
        return(
            <div className="postbox">
                <form action="">
                    <div className="postbox-name">绑定邮箱账号</div>
                    {/*输入邮箱账号*/}
                    <div className="postbox-input"><input type="text" placeholder="输入有效邮箱"/></div>
                    <div className="postbox-main">
                        {/*输入验证码*/}
                        <span><input type="text" placeholder="验证码"/></span>
                        <span><button>获取验证码</button></span>
                    </div>
                    <div className="postbox-button">
                        <button>确认</button>
                        <button className="return">返回</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Postbox