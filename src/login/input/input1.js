import React, { Component } from 'react';
import './input1.css'



class Input1 extends Component{
    render(){
        let {saveU,sendCode}=this.props;
        return(
            <div className="input1">
                <input className="yanzhengma" type="text"  placeholder="请输入验证码" onChange={saveU} />
                <span className="auth"> <button onClick={sendCode}>获得验证码</button></span>
            </div>
        )
     }
}

export default Input1