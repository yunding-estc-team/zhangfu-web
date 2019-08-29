import React, { Component } from 'react';
import './input1.css'
import {connect} from "react-redux";
import ReduxMap from "../../utils/ReduxMap";
import Input2 from "./input2";



class Input1 extends Component{
    render(){
        let {saveU,sendCode,user}=this.props;
        return(
            <div className="input1">
                <input className="yanzhengma" type="text"  placeholder="请输入验证码" id="code" onChange={saveU} />
                <span className="auth"> <button onClick={sendCode(user.address)}>获得验证码</button></span>
            </div>
        )
     }
}

export default connect(ReduxMap.mapStateToProps,ReduxMap.mapDispatchToPropsU)(Input1);