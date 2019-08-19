 import React, { Component } from 'react';
import Apply from '../apply/apply'
import img from '../../../images/1.png'
import './part.css'
 import {NavLink} from "react-router-dom";


 // 具体赛事
class Part extends Component{
    render(){
        return(
            <div>
                <div className="part">
                    {/*赛事海报*/}
                    <NavLink to="/area/index"><img src={img} alt=""/></NavLink>
                    <div className="introduce">
                        {/*赛事名称*/}
                        <NavLink to="/area/index"><p className="theme">2019年云顶暑期实践培训</p></NavLink>
                        <p> <span className="iconfont">&#xe716;</span>报名时间 ：2019年7月1日-2019年9月7日</p>
                        <p> <span className="iconfont">&#xe716;</span>评审时间 ：2019年7月1日-2019年9月7日</p>
                        <p> <span className="iconfont">&#xe669;</span>团队赛</p>
                        <p> <span className="iconfont">&#xe685;</span>计算机/算法</p>
                    </div>
                    <Apply/>
                </div>
            </div>
        )
     }
}

export default Part