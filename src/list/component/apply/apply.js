import React, { Component } from 'react';
import './apply.css'

// 报名
class Apply extends Component{
    render(){
        return(
            <div>
                <div className="apply">
                    <p className="sign">报名</p>
                    <p className="number"> <span className="iconfont">&#xe618;</span>1990已报名</p>
                </div>
            </div>
        )
     }
}

export default Apply