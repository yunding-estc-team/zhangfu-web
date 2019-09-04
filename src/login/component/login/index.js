import React, { Component } from 'react';
import './index.css'
import Input1 from "../../input/input1";
import Input2 from "../../input/input2";
import {Link, withRouter} from "react-router-dom";
import api, {instance} from "../../../config/url";
import {connect} from "react-redux";
import ReduxMap from "../../../store/ReduxMap";
import UserApi from "../../../config/userApi";
import '../../../common/Extra/msg.css'


// 登录的具体页面
class Loging extends Component{


    constructor(props) {
        super(props);
        this.state = {
            active: true,
            active2: false
        };
        this.handleShow = this.handleShow.bind(this);
        this.handleShow2 = this.handleShow2.bind(this);

    }

    goHome=()=>{
        this.props.history.push("/test")
    };
    forward=()=>{
        this.props.history.push("/home/index")
    };

    submit=(url,user)=>{
        // this.props.history.push("/home/index");
        console.log(instance);
        UserApi.login(url,user)
            .then(res=>{
                console.log(res);
                if (res.data.code==="200"){
                    // 存储token到localStorage
                    localStorage.setItem("token",res.data.data);
                    console.log(localStorage.getItem("token"));
                    this.props.history.push("/home/index");
                    // 跳转到主页
                    // this.props.history.push("/register/index");
                }else{
                    // 登录失败提示信息
                    this.props.setMsg("登录失败");
                }
            })

    };

    render(){
        const {saveU,msg,user}=this.props;

        let url=this.state.active===true?api.user.loginByCode:api.user.loginByPassword;

        console.log(url);

        return(
            <div>
                <div className="right">
                    <div className="header">
                        <span className="span1" onClick={this.handleShow}>验证码登录</span>
                        <span className="span2" onClick={this.handleShow2}>账号密码登录</span>
                    </div>
                    <div className="up">
                        {/*输入手机号*/}
                        <input className="number" type="text" placeholder="请输入手机号" id="userName" onChange={saveU}/>
                    </div>
                    <div className="down">
                        <div className={this.state.active === true ? '' : 'inputA'}><Input1/></div>
                        <div className={this.state.active2 === true ? '' : 'inputB'}><Input2/></div>
                        <span className="msgFailure" >{msg}</span>
                    </div>
                    <div className="section">
                        <div className="pour">
                            <span className="special"><Link to="/find/index">忘记密码</Link></span>
                           <span><Link to="/register/index">注册账户</Link></span>
                        </div>
                    </div>
                    {/*<div className="right-footer"><button onClick={submitU(status ?api.user.loginByCode:api.user.loginByPassword)*/}
                    <div className="right-footer"><button onClick={()=>this.submit(url,user)}>登录</button></div>
                </div>
            </div>
        )
     }

    handleShow ()  {
        if (this.state.active === true){
            return 0;
        } else {
            this.setState(
                {
                    active: !this.state.active,
                    active2: !this.state.active2
                }
            );
        }
    }
    handleShow2 () {
        if (this.state.active2 === true) {
            return 0;
        } else {
            this.setState(
                {
                    active: !this.state.active,
                    active2: !this.state.active2
                }
            );
        }
    }
}

const loging = connect(ReduxMap.mapStateToProps,ReduxMap.mapDispatchToPropsU)(Loging);
export default withRouter(loging);