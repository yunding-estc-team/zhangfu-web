import React, { Component } from 'react';
import './index.css'
import img3 from '../images/undraw_review_fkgn.png'
import List1 from "./component/list1";

// 注册
class Register extends Component{
    render(){
        return(
            <div className="register">
                <div className="img3">
                    <img src={img3} alt=""/>
                </div>
                <div className="middle">
                    <div className="welcome">
                        <p className="ch">欢迎注册琅琊榜</p>
                        <p className="en"><span>W E L C O M E </span> <span>R E G I S T E R</span></p>
                    </div>
                    <div className="list">
                        <div className="list2-header">
                            <div className="circle"/>
                            <div className="name">我是组织者</div>
                            <div className="circle"/>
                            <div className="name">我是参赛者</div>
                        </div>
                        <List1/>
                    </div>
                </div>
            </div>
        )
     }
}

export default Register