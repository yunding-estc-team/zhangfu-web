 import React, { Component } from 'react';
import Apply from '../apply/apply'
import img from '../../../images/1.png'
import './part.css'
 import {Link} from "react-router-dom";
 import ReduxMap from "../../../store/ReduxMap";
 import {connect} from "react-redux";
 import CompetitionApi from "../../../config/competitionApi";


 // 具体赛事
class Part extends Component{




    render(){
        // let contestList = [
        //     {
        //         "theme":"2019年云顶暑期实践培训",
        //         "sing":"2019年7月1日-2019年9月7日",
        //         "review":"2019年7月1日-2019年9月7日",
        //         "type":"团队赛",
        //         "subject":"计算机/算法"
        //     },
        //     {
        //         "theme":"2019年云顶暑期实践培训",
        //         "sing":"2019年7月1日-2019年9月7日",
        //         "review":"2019年7月1日-2019年9月7日",
        //         "type":"团队赛",
        //         "subject":"计算机/算法"
        //     }
        // ];

        let {competitionList}=this.props;

        let data = competitionList.map(contest =>
                <div className="part">
                    {/*赛事海报*/}
                    <img src={contest.cover} alt=""/>
                    <div className="introduce">
                        {/*赛事名称*/}
                        <Link to="/area/index"><p className="theme">{contest.name}</p></Link>
                        <p> <span className="iconfont">&#xe716;</span>报名时间 ：{contest.createAt}</p>
                        <p> <span className="iconfont">&#xe716;</span>评审时间 ：{contest.review}</p>
                        <p> <span className="iconfont">&#xe669;</span>{contest.isIndividual==="0"?"团队赛":"个人赛"}</p>
                        <p> <span className="iconfont">&#xe685;</span>{contest.type}</p>
                    </div>
                    <Apply joinLink={contest.joinLink}/>
                </div>
        );
        return(
            <div>
                {data}
            </div>
        )
     }
}

export default connect(ReduxMap.mapStateToProps,ReduxMap.mapDispatchToPropsC)(Part)