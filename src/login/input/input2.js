import React, { Component } from 'react';
import './input2.css'
import ReduxMap from "../../utils/ReduxMap";
import {connect} from "react-redux";

class Input2 extends Component{

    render(){
        let {saveU}=this.props;
        return(
            <div className="input2">
                <input type="password" id="password" placeholder="请输入密码" onChange={saveU} />
            </div>
        )
     }
}

export default connect(ReduxMap.mapStateToProps,ReduxMap.mapDispatchToPropsU)(Input2)