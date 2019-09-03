import React, { Component } from 'react';
import './index.css'
import ReduxMap from "../../../store/ReduxMap";
import {connect} from "react-redux";
import announceApi from "../../../config/announceApi";
// 赛事消息
class News extends Component{

    componentDidMount=()=>{
        let {setAnnounceL,current}=this.props;
        announceApi.getAnnounceList({c:current,p:10})
            .then(res=>{
                setAnnounceL(res.data.data);
            })
    };

    render(){
        // let newList = [
        //     {
        //         "theme":"互联网+比赛报名结束",
        //         "minute":" 互联网+比赛报名结束互联网+比赛报名结束互联网+比赛报名结束互联网+比赛报名结束互联网+比赛报名结束"
        //     }
        //
        // ];
        let {announceList} = this.props;
        let news = announceList.map(news  =>
        <div className="news-main">
            {/*赛事名称*/}
            <div className="main-theme">{news.theme}</div>
            {/*具体消息*/}
            <div className="main-minute">
                {news.minute}
            </div>
        </div>
    );
        return(
            <div className="advices">
                {news}
            </div>
        )
     }
}

export default connect(ReduxMap.mapStateToProps,ReduxMap.mapDispatchTOPropsW)(News)