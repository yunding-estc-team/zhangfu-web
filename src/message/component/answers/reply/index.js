import React, { Component } from 'react';
import './index.css'

// 答案
class Reply extends Component{
    render(){
        return(
            <div className="reply">
                <div className="reply-circle"><span>答</span></div>
                <div className="reply-main">
                    {/*答案*/}
                    <div className="reply-details">这个比赛主要是的这个比赛主要是干么什么的这个比赛主要是干什么的</div>
                    <div className="reply-time">
                        {/*回复时间*/}
                        <span>回复于<span>2019年8月15日</span></span>
                    </div>
                </div>
            </div>
        )
     }
}

export default Reply