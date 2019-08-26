import React, { Component } from 'react';
import './index.css'
// 赛事消息
class News extends Component{
    render(){
        let newList = [
            {
                "theme":"互联网+比赛报名结束",
                "minute":" 互联网+比赛报名结束互联网+比赛报名结束互联网+比赛报名结束互联网+比赛报名结束互联网+比赛报名结束"
            }

        ];
        let news = newList.map(news  =>
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

export default News