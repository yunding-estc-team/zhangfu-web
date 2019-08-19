import React, { Component } from 'react';
import './index.css'

// 修改姓名
class Call extends Component{
    render(){
        return(
            <div className="call">
                <form action="">
                    <div className="call-name">修改姓名</div>
                    <div className="call-input"><input type="text" placeholder="必须为真实姓名"/></div>
                    <div className="call-button">
                        <button>确认</button>
                        <button className="return">返回</button>
                    </div>
                </form>
            </div>
        )
     }
}

export default Call