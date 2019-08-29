import React, { Component } from 'react';
import './index.css'
import Input1 from "../../input/input1";
import Input2 from "../../input/input2";
import {Link} from "react-router-dom";
import api from "../../../config/url";
import {connect} from "react-redux";
import ReduxMap from "../../../utils/ReduxMap";
import userApi from "../../../config/userApi";


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



    render(){
        const {saveU,status,user}=this.props;

        let url=this.state.active===true?api.user.loginByCode:api.user.loginByPassword;
        return(
            <div>
                <div className="right">
                    <div className="header">
                        <span className="span1" onClick={this.handleShow}>验证码登录</span>
                        <span className="span2" onClick={this.handleShow2}>账号密码登录</span>
                    </div>
                    <div className="up">
                        {/*输入手机号*/}
                        <input className="number" type="text" placeholder="请输入手机号" id="address" onChange={saveU}/>
                    </div>
                    <div className="down">
                        <div className={this.state.active === true ? '' : 'inputA'}> <Input1/></div>
                        <div className={this.state.active2 === true ? '' : 'inputB'}><Input2/></div>
                    </div>
                    <div className="section">
                        <div className="pour">
                            <span className="special"><Link to="/find/index">忘记密码</Link></span>
                           <span><Link to="/register/index">注册账户</Link></span>
                        </div>
                    </div>
                    {/*<div className="right-footer"><button onClick={submitU(status ?api.user.loginByCode:api.user.loginByPassword)*/}
                    <div className="right-footer"><button onClick={userApi.login(url,user)}>登录</button></div>
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

export default connect(ReduxMap.mapStateToProps,ReduxMap.mapDispatchToPropsU)(Loging);