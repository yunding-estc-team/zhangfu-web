import React, { Component } from 'react';
import './index.css'
import {UserModel} from "../../../config/model";

// 验证原手机号后修改手机号
/**
 * @Data 2019年8月28日05点36分
 */
class Phone extends Component{
    render(){
        let {sendCode,saveU,submitU}=this.props;
        return(
            <div className="phone">
                <div className="phone-theme">修改手机号</div>
                <form action="">
                    {/*输入新手机号*/}
                    <div className="phone-new"><input type="text" id={UserModel.phone} placeholder="新手机号" onChange={saveU}/></div>
                    <div className="phone-auth">
                        <form action="">
                            {/*输入验证码*/}
                            <input type="text" placeholder="验证码" id={UserModel.code} onChange={saveU} />
                            <button onClick={sendCode}>发送验证码</button>
                        </form>
                    </div>
                    <div className="phone-button">
                        <button onClick={submitU()}>确定</button>
                    </div>
                </form>
            </div>
        )
     }
}

export default Phone