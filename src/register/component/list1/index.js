import React, { Component } from 'react';
import './index.css'
import { NavLink , Route , } from 'react-router-dom'
import UserApi from "../../../config/userApi";

class List1 extends Component{
    // 判断用户名
    judge=(e)=>{
        UserApi.judgeUser(e)
            .then(res=>{
                if(res.data.code!=="200"){
                    this.setState({msg:"输入非法的用户名"})
                }else{
                    UserApi.exist(e)
                        .then(res=>{
                            if(res.data.code==="204"){
                                this.setState({msg:"用户名已存在"});
                            }else{
                                // 消除异常信息,并保存到store中
                                this.setState({msg:""});
                                // TODO 保存
                            }
                        })
                }
            })
    };

    // 获取验证码
    sendCode=()=>{

    };
    render(){
        return(
            <div className="list1">
                <div className="list-main">
                    <form action="">
                        <ul>
                            {/*输入手机号*/}
                            <li className="first"><input type="text" placeholder="输入手机号" onChange={this.judge}/></li>
                            <li className="second">
                                {/*输入手机号验证码*/}
                                <span><input type="text" placeholder="输入手机验证码"/></span><span><button>获得验证码</button></span>
                            </li>
                            {/*输入密码*/}
                            <li className="third"><input type="text" placeholder="设置密码"/></li>
                            {/*再次输入密码*/}
                            <li className="fourth"><input type="text" placeholder="再次输入密码"/></li>
                            <li className="fifth"><NavLink><button>完成</button></NavLink></li>
                        </ul>
                    </form>
                </div>
            </div>
        )
     }
}

export default List1