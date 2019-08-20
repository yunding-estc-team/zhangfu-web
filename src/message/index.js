import React, { Component } from 'react';
import './index.css'
import News from "./component/news";
import Answers from "./component/answers";


// 消息盒子
class Message extends Component{
    constructor(props){
        super(props);
        this.state = {
            message1: true,
            message2: false
        };
        this.handleNews = this.handleNews.bind(this);
        this.handleAnswers = this.handleAnswers.bind(this);
    }
    render(){
        return(
            <div className="message">
                <div className="message-header">
                    <div className="news" onClick={this.handleNews}>赛事消息</div>
                    <div className="answers" onClick={this.handleAnswers}>问答</div>
                    <div className="message-state">全部标记为已读</div>
                </div>
                <div className="message-particular">
                    <div className={this.state.message1 === true ? '' : 'newsA'}><News/></div>
                    <div className={this.state.message2 === true ? '' : 'answersA'}><Answers/></div>
                </div>
            </div>
        )
     }
     handleNews(){
        if(this.state.message1 === true){
            return 0;
        }else{
            this.setState(
                {
                    message1: !this.state.message1,
                    message2: !this.state.message2,
                }
            )
        }
     }
     handleAnswers(){
         if(this.state.message2 === true){
             return 0;
         }else{
             this.setState(
                 {
                     message1: !this.state.message1,
                     message2: !this.state.message2,
                 }
             )
         }
     }

}

export default Message