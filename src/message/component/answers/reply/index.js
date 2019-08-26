import React, { Component } from 'react';
import './index.css'

// 答案
class Reply extends Component{
    render(){
        let replyList = [
            {
                "details":"这个比赛主要是的这个比赛主要是干么什么的这个比赛主要是干什么的",
                "time":"2019年8月15日"
            }
        ];
        let reply = replyList.map(reply =>
           <div>
               <div className="reply-circle"><span>答</span></div>
               <div className="reply-main">
                   {/*答案*/}
                   <div className="reply-details">{reply.details}</div>
                   <div className="reply-time">
                       {/*回复时间*/}
                       <span>回复于<span>{reply.time}</span></span>
                   </div>
               </div>
           </div>
        );
        return(
            <div className="reply">
                {reply}
            </div>
        )
     }
}

export default Reply