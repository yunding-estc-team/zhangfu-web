import React, { Component } from 'react';
import './input1.css'



class Input1 extends Component{
    render(){
        return(
            <div className="input1">
                <input className="yanzhengma" type="text"  placeholder="请输入验证码"  />
                <span className="auth"> <button>获得验证码</button></span>
            </div>
        )
     }
}

export default Input1