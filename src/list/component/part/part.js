 import React, { Component } from 'react';
import Apply from '../apply/apply'
import img from '../../../images/1.png'
import './part.css'
 import {Link} from "react-router-dom";


 // 具体赛事
class Part extends Component{
    render(){
        let contestList = [
            {
                "theme":"2019年云顶暑期实践培训",
                "sing":"2019年7月1日-2019年9月7日",
                "review":"2019年7月1日-2019年9月7日",
                "type":"团队赛",
                "subject":"计算机/算法"
            },
            {
                "theme":"2019年云顶暑期实践培训",
                "sing":"2019年7月1日-2019年9月7日",
                "review":"2019年7月1日-2019年9月7日",
                "type":"团队赛",
                "subject":"计算机/算法"
            }
        ];
        let data = contestList.map(contest =>
            <div>
                <div className="part">
                    {/*赛事海报*/}
                    <Link to="/area/index"><img src={img} alt=""/></Link>
                    <div className="introduce">
                        {/*赛事名称*/}
                        <Link to="/area/index"><p className="theme">{contest.theme}</p></Link>
                        <p> <span className="iconfont">&#xe716;</span>报名时间 ：{contest.sing}</p>
                        <p> <span className="iconfont">&#xe716;</span>评审时间 ：{contest.review}</p>
                        <p> <span className="iconfont">&#xe669;</span>{contest.type}</p>
                        <p> <span className="iconfont">&#xe685;</span>{contest.subject}</p>
                    </div>
                    <Apply/>
                </div>
            </div>
        );
        return(
            <div>
                {data}
            </div>
        )
     }
}

export default Part