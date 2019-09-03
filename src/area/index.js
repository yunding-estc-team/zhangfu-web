import React, { Component } from 'react';
import './index.css'
import Reply from "../message/component/answers/reply";
import {Link} from "react-router-dom";
import api, {instance} from "../config/url";
import CompetitionApi from "../config/competitionApi";
import wikiApi from "../config/wikiApi";
import ReduxMap from "../store/ReduxMap";
import {connect} from "react-redux";

// 赛事详情
class Area extends Component{
    constructor(props){
        super(props);
        this.state = {
            attention:true,
            message:true,
            question:false,

            // 问题内容
            content:"",
            // 问题id
            competitionWikiId:this.props.id,
            // 问答时的提示信息
            mag:"",
            // 赛事id
            id:this.props.location.state,

        }
    };

    // 获取数据
    getInfo=(competitionId)=>{
        let {setC}=this.props;
        CompetitionApi.getCompetitionInfo(competitionId)
            .then(res=>{
                console.log(res.data);
                setC(res.data.data);
            })
    };

    // 加载组件时
    componentDidMount=()=> {
        let {setWikiList} = this.props;
        let id = this.props.location.state.id;
        // 获取赛事信息
        this.getInfo(id);

        // 获取问答信息
        wikiApi.getAllWiki(id,1,10)
            .then(res=>setWikiList(res.data.data))
    };

    // 点击关注
    handleAttention(){
        if (this.state.attention === true){

            // 关注赛事
            CompetitionApi.attention(this.state.id);

            // 改变受控组件状态
            this.setState(
                {
                    attention:!this.state.attention,
                }
            )
        }
        else{
            return 0
        }
    }


    handleMessage(){
        if(this.state.message === true){
            return 0;
        }
        else{
            this.setState(
                {
                    message:!this.state.message,
                    question:!this.state.question,
                }
            )
        }
    }

    handleQuestion(){
        if(this.state.question === true){
            return 0;
        }
        else{
            this.setState(
                {
                    message:!this.state.message,
                    question:!this.state.question,
                }
            )
        }
    }

    handleClick = (event) =>{
        console.log(this.state.content);
        instance.post(api.competitionWiki.userAnswer,
            {
                competitionWikiId:this.state.competitionWikiId,
                content:this.state.content
            }
        ).then(
            res =>{
                if(res.data.code==="200"){
                    // todo success
                    this.setState({mag:""})
                }else{
                    // todo failure
                    this.setState({mag:"提问失败！！!"})
                }

            }
        )
    };

    inputChange(e){
        let inputValue = e.target.value;
        this.setState({
            content: inputValue
        })
    }

    // 提交问题数据
    submit=()=>{
        let {wiki,setMsg}=this.props;

        // wiki：{competitionId，content:提问内容）}
        wikiApi.askQuestions(wiki)
            .then(res=>{
                if(res.data.code==="200"){
                    setMsg("");
                }else{
                    setMsg("提问失败");
                }
            })
    };

    render(){
        // 比赛的所有属性，问答列表,消息
        let {competition,wikiList,msg,saveW}=this.props;

        let data1 =
            <div>
                <span><span className="iconfont">&#xe66e;</span><span>{competition.hot}</span></span>
                <span><span className="iconfont">&#xe7d4;</span><span>{competition.attention}</span></span>
                <span><span className="iconfont">&#xe694;</span><span>{competition.clickCount}</span></span>
            </div>
        ;
        console.log(wikiList);
        let data4 = wikiList.map(question =>
            <div className="catechism-main">
                <div className="main-question">
                    <div className="main-circle"><span>问</span></div>
                    <div className="problem">
                        {/*问题*/}
                        <div className="problem-details">{question.question}</div>
                        <div className="problem-footer">
                            {/*提问时间*/}
                            <span className="problem-time">提问于 <span>{question.createAt}</span></span>
                            <Reply/>
                        </div>
                    </div>
                </div>
            </div>
        );

        let data2 =
            <div className="particulars-left">
                {/*赛事名称*/}
                <div className="match-name">{competition.name}</div>
                <div className="match-area">
                    <div className="details-first">
                        <div className="first-title" id="jinsai">竞赛信息</div>
                        <div className="first-question">
                            <a href="#wengda"><div className="question-circle">?</div></a>
                            <a href="#wengda"><div className="question-letter">仍有疑问</div></a>
                        </div>
                    </div>
                    <div className="details-second">
                                <span className="top">
                                    <div className="circle"><span>报名</span></div>
                                </span>
                        <span className="top">
                                    <div className="solid"/>
                                </span>
                        <span className="top">
                                    <div className="circle"><span>评审</span></div>
                                </span>
                        <span className="top">
                                    <div className="solid"/>
                                </span>
                        <span className="top">
                                    <div className="circle"><span>颁奖</span></div>
                                </span>
                    </div>
                    <div className="details-third">
                        <div className="third-title">
                            <div className="title-number">1</div>
                            <div className="title-name">赛事介绍</div>
                        </div>
                        {/*赛事介绍*/}
                        <div className="details-word">
                            {competition.introduce}
                        </div>
                    </div>
                    <div className="details-fourth">
                        <div className="third-title">
                            <div className="title-number">2</div>
                            <div className="title-name">竞赛规则</div>
                        </div>
                        {/*赛事规则*/}
                        <div className="details-word">
                            {competition.content}
                        </div>
                    </div>
                </div>
                <div className="catechism" id="wengda">
                    <div className="catechism-name">赛事问答</div>
                    <div className="catechism-input">

                        {/*输入问题*/}
                        <input type="text" name="" id="" placeholder="问点什么吧" onChange={saveW}/>

                        {/*提交问题*/}
                        <button onClick={this.submit}>我要提问</button>
                        <span className="mag">{msg}</span>
                    </div>
                    {data4}
                </div>
            </div>
        ;

        let data3 =
            <div className={"particulars-right"}>
                <div className="right-section">
                    <span className="right-type">主办单位</span>
                    <div className="sponsor">
                        <Link to="/center/organizer/you/index"><div className="sponsor-picture"><img src="" alt=""/></div></Link>
                        {/*主办单位*/}
                        <Link to="/center/organizer/you/index"><div className="sponsor-name">{competition.host}</div></Link>
                    </div>
                </div>
                <div className="right-section">
                    <span className="right-type">赛事类型</span>
                    {/*赛事类型*/}
                    <span className="type-word">{competition.isIndividual}</span>
                </div>
                {/*<div className="right-section">*/}
                {/*    <span className="right-type">报名时间</span>*/}
                {/*    /!*报名时间*!/*/}
                {/*    <span className="type-word">{competition}</span>*/}
                {/*</div>*/}
                {/*<div className="right-section">*/}
                {/*    <span className="right-type">比赛时间</span>*/}
                {/*    /!*比赛时间*!/*/}
                {/*    <span className="type-word">{right.gametime}</span>*/}
                {/*</div>*/}
                <div className="right-section">
                    <span className="right-type">学科类型</span>
                    {/*学科类型*/}
                    <span className="type-word">{competition.type}</span>
                </div>
            </div>
        ;


        return(
            <div className="area">
                <div className="picture">
                    <span className={this.state.attention=== true ? 'attention1' : 'attention2'}>
                        <button onClick={this.handleAttention.bind(this)}>关注</button>
                    </span>
                    <Link to="/datum/index">
                        <button>认领赛事</button>
                    </Link>
                </div>
                <div className="area-header">
                    <span className={this.state.message===true ? 'message1' : 'message2'}>
                          <div className="header-left" onClick={this.handleMessage.bind(this)}><a href="#jinsai">竞赛信息</a></div>
                    </span>
                    <span className={this.state.question===true ? 'question1' : 'question2'}>
                        <div className="header-left" onClick={this.handleQuestion.bind(this)}><a href="#wengda">问答</a></div>
                    </span>
                    <div className="header-middle">
                        {data1}
                    </div>
                    <div className="header-button">
                        <Link to={competition.joinLink}><button>立即报名</button></Link>
                    </div>
                </div>
                <div className="area-main">
                    {data2}
                    {data3}
                </div>
            </div>
        )
    }
}

export default connect(ReduxMap.mapStateToProps,ReduxMap.mapDispatchTOPropsW)(Area);