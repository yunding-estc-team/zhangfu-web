import React, { Component } from 'react';
import './index.css'
// 认证举办方身份
class Authentication extends Component{
    render(){
        return(
            <div className="authentication">
                <div className="authentication-theme"><span>认证举办方身份</span></div>
                <form action="">
                    <div className="authentication-textarea"><textarea name="" id="" cols="30" rows="10" placeholder="内容需真实可靠"/></div>
                    <div className="authentication-annotation">
                        <span className="iconfont">&#xe633;</span>
                        <span className="add">添加附件</span>
                        <span>（上传有效文件或照片）</span>
                    </div>
                    <div className="authentication-button">
                        <button>确认</button>
                        <button className="return">返回</button>
                    </div>
                </form>
            </div>
        )
     }
}

export default Authentication