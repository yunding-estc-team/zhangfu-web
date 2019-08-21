import React, { Component } from 'react';
import './style.css'
import sp from "../../images/资源 1.png"
import {NavLink, Route} from "react-router-dom";
import Right1 from "./component/right1";
import Right2 from "./component/right2";


// 公共头
class Header extends Component{
    render(){
        return(
            <div>
                <div className="section0">
                    <div className="header">
                        <div className="header-left">
                            {/*logo*/}
                            <span className="logo"><NavLink to="/home/index"><img src={sp} alt=""/></NavLink></span>
                            <span><NavLink to="/list/index">排行榜</NavLink></span>
                        </div>
                        <div className="search">
                            <form action="">
                                <input type="text"/>
                                <button> <span className="iconfont">&#xe74b;</span>搜索</button>
                            </form>
                        </div>
                        <div>
                            {localStorage.getItem("token")!==null?<Right2/>:
                                    <span className="right1">
                                        <NavLink to="/register/index">注册</NavLink>
                                        <NavLink to="/login/index">/登录</NavLink>
                                    </span>}
                        </div>
                    </div>
                </div>
            </div>
        )
     }
}

export default Header