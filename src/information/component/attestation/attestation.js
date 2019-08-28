import React, { Component } from 'react';
import './attestation.css';
import {Link, Route} from "react-router-dom";


// 账号安全
/**
 * @Data 2019年8月28日04点37分
 */

class Attestation extends Component{
    render(){
        let {user}=this.props;
        return(
            <div className="attestation">
                <div className="section">
                    <li>
                        <span className="name">真实姓名</span>
                        <span className="minute1">{user.realname}</span>
                        <span><Link to="/information/component/name/index"><button>修改</button></Link></span>
                    </li>
                    <li>
                        <span className="name">邮箱账号</span>
                        <span className="minute">{user.email}</span>
                        // 当有邮箱是不显示
                        {user.email===""||user.email===undefined?
                            <span><Link to="/information/component/postbox/index"><button>绑定</button></Link></span>:<span/>}
                    </li>
                    <li>
                        <span className="name">手机账号</span>
                        <span className="minute">{user.phone}</span>
                        <span><Link to="/information/component/safety/index"><button>修改</button></Link></span>
                    </li>
                    <li>
                        <span className="name">登陆密码</span>
                        <span className="minute">
                            密码要求至少包含字母,符号或数字中的两项且长度超过8位，
                            建议您经常修改密码，以保证帐号更加安全。
                        </span>
                        <span><Link to="/information/component/possword/index"><button>修改</button></Link></span>
                    </li>
                    <li>
                        <span className="name1">学生重要信息</span>
                        <span><Link to="/information/component/student/index"><button>修改</button></Link></span>

                    </li>
                </div>
            </div>
        )
     }
}

export default Attestation