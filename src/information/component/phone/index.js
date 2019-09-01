import React, { Component } from 'react';
import './index.css'
import {UserModel} from "../../../config/model";
import api from "../../../config/url";
import Safely from "../safety";

// 验证原手机号后修改手机号
/**
 * @Data 2019年8月28日05点36分
 */
class Phone extends Component{
    constructor(props){
        super(props);
        this.state=({
            safety:false,
        })
    }
    changeSafety(){
        this.setState({
            safety:true,
        })
    }
    render(){
        let {safety} = this.state;
        let {sendCode,saveU,submitU}=this.props;
        if(safety){
            return(
                <div className="phone">
                    <div className="phone-theme">修改手机号</div>
                    <form action="">
                        {/*输入新手机号*/}
                        <div className="phone-new"><input type="text" id={UserModel.phone} placeholder="新手机号" onChange={saveU}/></div>
                        <div className="phone-auth">
                            <form action="">
                                {/*输入验证码*/}
                                <input type="text" placeholder="验证码" id={UserModel.code} onChange={saveU} />
                                <button onClick={sendCode}>发送验证码</button>
                            </form>
                        </div>
                        <div className="phone-button">
                            <button onClick={submitU(api.user.sendPhoneCode).then(this.props.changeNumber)}>确定</button>
                        </div>
                    </form>
                </div>
            )
        }else if(!safety){
            return(
                <Safely changeSafety={() => this.changeSafety(this.state.number)}/>
            )
        }
     }
}

export default Phone