import React, { Component } from 'react';
import './index.css'

// 回复框
class Box extends Component{
    render(){
        return(
            <div className="box">
                <form action="">
                    <div className="box-circle"><span>答</span></div>
                    <div className="box-answer"><input type="text" placeholder="我要认真回答问题了"/></div>
                    <div className="box-button"><button>确认</button></div>
                </form>
            </div>
        )
     }
}

export default Box