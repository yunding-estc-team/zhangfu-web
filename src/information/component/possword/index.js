import React, { Component } from 'react';
import './index.css'
import {UserModel} from "../../../config/model";

// 修改密码
/**
 * @Data 2019年8月28日05点50分
 */
class Code extends Component{
    render(){
        let {saveU,checkoutPassword,submitU}=this.props;
        return(
            <div className="code">
                <div className="code-theme">修改密码</div>
                <form action="">
                    {/*输入原密码*/}
                    <div className="code-old"><input type="password" placeholder="原密码" id={UserModel.oldPassword} onChange={saveU}/></div>
                    {/*输入新密码*/}
                    <div className="code-new"><input type="password" placeholder="新密码" id={UserModel.password} onChange={saveU}/> <span className="iconfont">&#xe668;</span></div>
                    {/*再次输入新密码*/}
                    <div className="code-affirm"><input type="password" placeholder="确认新密码" onChange={checkoutPassword}/></div>
                    <div className="code-button">
                        <button onClick={submitU()}>确认</button>
                        //todo 应该有返回链接
                        <button className="return">返回</button>
                    </div>
                </form>
            </div>
        )
     }
}

export default Code