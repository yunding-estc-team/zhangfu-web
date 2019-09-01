import React, { Component } from 'react';
import './attestation.css';
import  Call from "../name/index"
import Postbox from "../postbox";
import Phone from "../phone";
import Code from "../possword";
import Student from "../student";
import {UserModel} from "../../../config/model";
import api from "../../../config/url";


// 账号安全
/**
 * @Data 2019年8月28日04点37分
 */

class Attestation extends Component{
    constructor(props){
        super(props);
        this.state=({
            name:true,
            email:true,
            number:true,
            code:true,
            student:true,
        })
    }
    changeNameState(){
        this.setState({
            name:false,
        })
    }
    changeEmailState(){
        this.setState({
            email:false,
        })
    }
    changeNumberState(){
        this.setState({
            number:false,
        })
    }
    changeCodeState(){
        this.setState({
            code:false,
        })
    }
    changeStudentState(){
        this.setState({
            student:false,
        })
    }

    changeName(){
        this.setState({
            name:true,
        })
    }
    changeEmail(){
        this.setState({
            email:true,
        });
    }
    changeNumber(){
        this.setState({
            number:true,
        })
    }
    changeStudent(){
        this.setState({
            student:true,
        })
    }
    changeCode(){
        this.setState({
            code:true,
        })
    }
    render(){
        let {user}=this.props;
        let {name,email,number,code,student} = this.state;
        if (name&&email&&number&&code&&student){
            return(
                <div className="attestation">
                    <div className="section">
                        <li>
                            <span className="name">真实姓名</span>
                            // todo realname no exist
                            {/*<span className="minute1">{user.realname}</span>*/}
                            <span><button onClick={this.changeNameState.bind(this)}>修改</button></span>
                        </li>
                        <li>
                            <span className="name">邮箱账号</span>
                            <span className="minute">{user.email}</span>
                            // 当有邮箱是不显示
                            {user.email===""||user.email===undefined?
                                <span><button onClick={this.changeEmailState.bind(this)}>绑定</button></span>:<span/>}
                        </li>
                        <li>
                            <span className="name">手机账号</span>
                            <span className="minute">{user.phone}</span>
                            <span><button onClick={this.changeNumberState.bind(this)}   >修改</button></span>
                        </li>
                        <li>
                            <span className="name">登陆密码</span>
                            <span className="minute">
                            密码要求至少包含字母,符号或数字中的两项且长度超过8位，
                            建议您经常修改密码，以保证帐号更加安全。
                        </span>
                            <span><button onClick={this.changeCodeState.bind(this)}>修改</button></span>
                        </li>
                        <li>
                            <span className="name1">学生重要信息</span>
                            <span><button onClick={this.changeStudentState.bind(this)}>修改</button></span>

                        </li>
                    </div>
                </div>
            )
        }else if (!name&&email&&number&&code&&student){
            return (<div><Call changeName={() => this.changeName(this.state.name)}/></div>)
        }else if (name&&!email&&number&&code&&student){
            return (<div><Postbox changeEmail={() => this.changeEmail(this.state.email)}/></div>)
        }else if (name&&email&&!number&&code&&student){
            return (<div><Phone changeNumber={() => this.changeNumber(this.state.number)}/></div>)
        }else if (name&&email&&number&&!code&&student){
            return (<div><Code changeCode={() => this.changeCode(this.state.code)}/></div>)
        }else if(name&&email&&number&&code&&!student){
            return (<div><Student changeStudent={() => this.changeStudent(this.state.student)}/></div>)
        } else {
            return 0
        }
     }
}

export default Attestation