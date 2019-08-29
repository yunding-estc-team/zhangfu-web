import React, { Component } from 'react';
import './index.css'
import {UserModel} from "../../../config/model";
import api from "../../../config/url";
// 绑定邮箱账号
/**
 * @Data 2019年8月28日09点15分
 */
class Postbox extends Component{
    render(){
        let {submitU,sendCode,saveU}=this.props;
        return(
            <div className="postbox">
                <form action="">
                    <div className="postbox-name">绑定邮箱账号</div>
                    {/*输入邮箱账号*/}
                    <div className="postbox-input"><input type="text" placeholder="输入有效邮箱" id={UserModel.email} onChange={saveU}/></div>
                    <div className="postbox-main">
                        {/*输入验证码*/}
                        <span><input type="text" placeholder="验证码" id={UserModel.code} onChange={saveU}/></span>
                        <span><button onClick={sendCode}>获取验证码</button></span>
                    </div>
                    <div className="postbox-button">
                        <button onClick={submitU(api.user.checkCode)}>确认</button>
                        // todo 返回链接
                        <button className="return">返回</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Postbox