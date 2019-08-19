import React, { Component } from 'react';
import './index.css'
import { BrowserRouter as Router, NavLink , Route , } from 'react-router-dom'

class List1 extends Component{
    render(){
        return(
            <div className="list1">
                <div className="list-main">
                    <form action="">
                        <ul>
                            {/*输入手机号*/}
                            <li className="first"><input type="text" placeholder="输入手机号"/></li>
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