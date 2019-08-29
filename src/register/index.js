import React, { Component } from 'react';
import './index.css'
import img3 from '../images/undraw_review_fkgn.png'
import List1 from "./component/list1";
import {connect} from "react-redux";
import ReduxMap from "../utils/ReduxMap";

// 注册
/**
 * @Data 2019年8月30日
 */
class Register extends Component{
    constructor(props){
        super(props);
        this.state={
            user:{
                type:"organization",
                address:"",
                password:"",
                rePassword:"",
            }
        }
    }
    componentDidMount() {
        // 默认选择组织
        this.props.setU({type:"organization"});
    }

    // handle choose user type
    handleChooseType=(e)=>{
        this.props.setU({type:e.nativeEvent.target.id});
    };
    render(){
        console.log(this.props.user.type);
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
                            <div id="organization" className={this.props.user.type==="organization" ? 'circle1A' : 'circle1B'} onClick={this.handleChooseType}/>
                            <div className="name">我是组织者</div>
                            <div id="student" className={this.props.user.type === "student" ? 'circle2A' : 'circle2B'} onClick={this.handleChooseType}/>
                            <div className="name">我是参赛者</div>
                        </div>
                        <List1/>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(ReduxMap.mapStateToProps,ReduxMap.mapDispatchToPropsU)(Register)