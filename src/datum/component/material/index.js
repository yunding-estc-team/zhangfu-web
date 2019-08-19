import React, { Component } from 'react';
import './index.css'
// 举办方信息录入
class Material extends Component{
    render(){
        return(
            <div className="material">
                <form action="">
                    <div className="material-name"><span>名称：</span><span><input type="text" placeholder="天一科技公司"/></span></div>
                    <div className="material-principal"><span>负责人：</span><span><input type="text" placeholder="张三"/></span></div>
                    <div className="material-number"><span>手机号码：</span><span><input type="text" placeholder="58916519851"/></span></div>
                    <div className="material-email"><span>电子邮箱：</span><span><input type="text" placeholder="132*******@qq.com"/></span></div>
                    <div className="material-intro"><span>简介：</span><span><textarea name="" id="" cols="30" rows="10" placeholder="简介越真实越认真越有信服力，越容易通过认证哦"/></span></div>
                    <div className="material-button"><button>保存</button></div>
                </form>
            </div>
        )
     }
}

export default Material