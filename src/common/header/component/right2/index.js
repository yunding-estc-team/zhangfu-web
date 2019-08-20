import React, { Component } from 'react';
import './index.css'
import img8 from "../../../../images/wallhaven-dge9ll.png"
import {NavLink} from "react-router-dom";


class Right2 extends Component{
    render(){
        return(
            <div className="right2">
                <NavLink to="/message/index"><span className="iconfont">&#xe611;</span></NavLink>
                <NavLink to="/center/personage/me/index"><span><img src={img8} alt=""/></span></NavLink>
            </div>
        )
     }
}

export default Right2