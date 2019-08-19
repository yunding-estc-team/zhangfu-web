import React, { Component } from 'react';
import './index.css'
import {NavLink} from "react-router-dom";
// 原手机号验证
class Safely extends Component{
    render(){
        return(
            <div className="safely">
                <div className="safely-theme">安全检测</div>
                <form action="">
                    {/*输入原手机号*/}
                    <div className="safely-old"><input type="text" placeholder="原手机号"/></div>
                    <div className="safely-auth">
                        <form action="">
                            {/*输入验证码*/}
                            <input type="text" placeholder="验证码"/>
                            <button>发送验证码</button>
                        </form>
                    </div>
                    <div className="safely-button">
                        <NavLink to="/information/component/phone/index"><button>提交</button></NavLink>
                    </div>
                </form>
            </div>
        )
     }
}

export default Safely