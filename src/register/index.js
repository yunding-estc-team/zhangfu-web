import React, { Component } from 'react';
import './index.css'
import img3 from '../images/undraw_review_fkgn.png'
import List1 from "./component/list1";
import UserApi from '../config/userApi'
import api, {instance} from "../config/url";

// 注册
class Register extends Component{

    constructor(props){
        super(props);
        this.state={
            type:"",
            code:"",
            address:"",
            password:"",
        };

    }


    // 提交信息
    submit=()=>{
        let data = {
            code:this.state.code,
            address:this.state.userName,
            type:this.state.type,
            password:this.state.password,
        };
        instance.post(api.user.register,data)
            .then(res=>{
                if (res.data.code==="200"){
                    return
                }
            })
    };
    render(){
        return(
            <div className="register">
                <div className="img3">
                    <img src={img3} alt=""/>
                </div>
                <div className="middle">
                    <div className="welcome">
                        <p className="ch">欢迎注册赛谱</p>
                        <p className="en"><span>W E L C O M E </span> <span>R E G I S T E R</span></p>
                    </div>
                    <div className="list">
                        <div className="list2-header">
                            <div className="circle" id="organization" onClick={event => {this.setState({type:event.nativeEvent.target.id})}}/>
                            <div className="name">我是组织者</div>
                            <div className="circle" id="student" onClick={event => {this.setState({type:event.nativeEvent.target.id})}}/>
                            <div className="name">我是参赛者</div>
                        </div>
                        <List1 submit={this.submit}/>
                    </div>
                </div>
            </div>
        )
     }
}

export default Register