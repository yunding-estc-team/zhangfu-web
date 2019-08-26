import React, { Component } from 'react';
import './index.css'
import Box from "./input";
import Reply from "./reply";
import Personal from "../../../information/component/personal/personal";


// 问答
class Answers extends Component{
    constructor(props) {
        super(props);
        this.state = {
            box: false,
            wiki:{
                wikiId:"19rtyu",

            }
        };
        this.handleAnswer = this.handleAnswer.bind(this);
    }
    handleAnswer(){
        if(this.state.box === true)
        {
            return 0;
        }
        else{
            this.setState(
                {
                    box:!this.state.box
                }
            )
        }
    }



    render(){
        let answerList = [
            {
                "details":"这个比赛主要是干嘛这个比赛主要是干嘛这个比赛主要是干嘛这个比赛主要是干嘛这个比赛主要是干嘛这个比赛主要是干这个比赛主要是干嘛",
                "time":"2019年8月15日"
            }
        ];
        let answer =answerList.map(answer =>
            <div className="main-question">
                <div className="main-circle"><span>问</span></div>
                <div className="problem">
                    {/*问题*/}
                    <div className="problem-details">{answer.details}</div>
                    <div className="problem-footer">
                        {/*提问时间*/}
                        <span className="problem-time">提问于 <span>{answer.time}</span></span>
                        <span className="problem-answer" onClick={this.handleAnswer}>回复</span>
                        <div className={this.state.box === true ? '' : 'box1'}><Box id={this.state.wiki.wikiId}/></div>
                        <Reply/>
                    </div>
                </div>
            </div>
        );
        return(
          <div className="answer">
              <div className="answer-main">
                  {answer}
              </div>
          </div>
        )
     }
}

export default Answers