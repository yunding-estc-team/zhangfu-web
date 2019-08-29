import React, { Component } from 'react';
import './index.css'
import {NavLink} from "react-router-dom";
import {UserModel} from "../../../config/model";
import api from "../../../config/url";

// 原手机号验证

class Safely extends Component{
    render(){
        let {saveU,sendCode,submitU}=this.props;
        return(
            <div className="safely">
                <div className="safely-theme">安全检测</div>
                {/*
                todo 修改页面 @张富
                不需要输入原本的手机号
                */}
                    {/*输入原手机号*/}
                    <div className="safely-old"><input type="text" placeholder="原手机号" id={UserModel.phone} onChange={saveU}/></div>
                    <div className="safely-auth">
                            {/*输入验证码*/}
                            <input type="text" placeholder="验证码" id={UserModel.code} onChange={saveU}/>
                            <button onClick={sendCode}>发送验证码</button>
                    </div>
                    <div className="safely-button">
                        <NavLink to="/information/component/phone/index"><button onClick={submitU(api.user.checkCode)}>提交</button></NavLink>
                    </div>
            </div>
        )
     }
}

export default Safely