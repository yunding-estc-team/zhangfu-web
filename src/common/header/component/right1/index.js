import React, { Component } from 'react';
import './index.css'
import {NavLink} from "react-router-dom";

class Right1 extends Component{
    render(){
        return(
            <div className="right1">
                <span><NavLink to="/login/index">登录/</NavLink></span>
                <span><NavLink to="/register/index">注册</NavLink></span>
            </div>
        )
     }
}

export default Right1