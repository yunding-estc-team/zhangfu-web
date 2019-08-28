import React, { Component } from 'react';
import './input2.css'

class Input2 extends Component{

    render(){
        [saveU]=this.props;
        return(
            <div className="input2">
                <input type="text" id="password" placeholder="请输入密码" onChange={saveU} />
            </div>
        )
     }
}

export default Input2