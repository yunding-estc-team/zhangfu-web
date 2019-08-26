import React, { Component } from 'react';
import './index.css'
import img6 from "../../../images/853f400ac858c0f3749601f50a83da0ebdbeede135caf-yYVAGU_fw658.png"
import {Link} from "react-router-dom";
// 举办过的赛事
class Contest extends Component{
    render(){
        let contestList = [
            {
                "name":"‘互联网+’创新创业大赛",
                "time":"2017年12月4日",
            }
        ];
        let data = contestList.map(contest =>
            <div className="contest-part">
                {/*赛事海报*/}
                <div className="contest-img"><img src={img6} alt=""/></div>
                <div className="contest-details">
                    {/*赛事名称*/}
                    <div className="details-name"><span>{contest.name}</span></div>
                    {/*更新时间*/}
                    <div className="details-time"><span>更新：{contest.time}</span></div>
                    <div className="details-check"><span>查看详情</span></div>
                </div>
            </div>
        );
        return(
            <div className="contest">
                <div className="contest-button">
                    <Link to="/set/index"><button>发布赛事</button></Link>
                    <button>更新赛事</button>
                </div>
                <div className="contest-main">
                    {data}
                </div>
            </div>
        )
     }
}

export default Contest