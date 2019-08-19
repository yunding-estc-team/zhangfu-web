import React, { Component } from 'react';
import './index.css'

// 验证原手机号后修改手机号
class Phone extends Component{
    render(){
        return(
            <div className="phone">
                <div className="phone-theme">修改手机号</div>
                <form action="">
                    {/*输入新手机号*/}
                    <div className="phone-new"><input type="text" placeholder="新手机号"/></div>
                    <div className="phone-auth">
                        <form action="">
                            {/*输入验证码*/}
                            <input type="text" placeholder="验证码"/>
                            <button>发送验证码</button>
                        </form>
                    </div>
                    <div className="phone-button">
                        <button>确定</button>
                    </div>
                </form>
            </div>
        )
     }
}

export default Phone