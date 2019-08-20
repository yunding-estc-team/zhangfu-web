import React, { Component } from 'react';
import './index.css'

// 修改密码
class Code extends Component{
    render(){
        return(
            <div className="code">
                <div className="code-theme">修改密码</div>
                <form action="">
                    {/*输入原密码*/}
                    <div className="code-old"><input type="text" placeholder="原密码"/></div>
                    {/*输入新密码*/}
                    <div className="code-new"><input type="text" placeholder="新密码"/> <span className="iconfont">&#xe668;</span></div>
                    {/*再次输入新密码*/}
                    <div className="code-affirm"><input type="text" placeholder="确认新密码"/></div>
                    <div className="code-button">
                        <button>确认</button>
                        <button className="return">返回</button>
                    </div>
                </form>
            </div>
        )
     }
}

export default Code