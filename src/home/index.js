import React, { Component } from 'react';
import './index.css'
// import img4 from '../images/1.png'
import {Link} from "react-router-dom";
import CompetitionApi from "../config/competitionApi";
import {connect} from "react-redux";
import ReduxMap from "../store/ReduxMap";
// 首页
class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            new:true,
            host:false,
            // 从后台获取的(首页)数据
            gameList:[],
        }
    }
    // 获取数据
    getRank=(type)=>{
        CompetitionApi.home(type,1,6)
        .then(res=>{
            this.setState({gameList:res.data.data});
        });
    };

    // 加载时获取数据
    componentDidMount() {
        console.log("did");
        let {setCL}=this.props;
        CompetitionApi.home("new",1,6)
            .then(res=>{
                console.log(res.data.data);
                setCL(res.data.data);
            })
    };


    handleNew(){
        this.getRank("new");
        console.log("new");
        if(this.state.new === true){
            return 0
        }
        else{
            this.setState(
                {
                    new:!this.state.new,
                    host:!this.state.host,
                }
            )
        }
    }

    handleHost(){
        this.getRank("hot");
        if(this.state.host === true){
            return 0
        }
        else{
            this.setState(
                {
                    new:!this.state.new,
                    host:!this.state.host,
                }
            )
        }
    }

    render(){

        // 获取比赛排行列表
        let {competitionList}=this.props;
        let part = competitionList.map(game =>
            <div>
                <Link to={{
                    pathname: "/area/index",
                    state: {id: game.CompetitionId},
                    search: "dasfasd",
                }}>
                    <div className="games">
                        <div className="img">
                            <img src={game.cover} alt=""/>
                        </div>
                        <div>
                            <div className="game-name">{game.name}</div>
                            <div className="game-details">
                                <div className="details-left">
                                    <div><span className="iconfont">&#xe716;</span><span
                                        className="word">{game.createAt}</span></div>
                                    <div className="game-state2"><span className="iconfont">&#xe61b;</span><span
                                        className="word">{game.joinLink===null||game.joinLink===""?"已结束":"进行中"}</span></div>
                                </div>
                                <div className="details-right">
                                    <div className="personage"><span className="iconfont">&#xe713;</span><span
                                        className="word">{game.isIndividual==="0"? "个人赛":"团队赛"}</span></div>
                                    <div><span className="iconfont">&#xe61c;</span>
                                        <span className="word">{game.clickCount}</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        );

        return(
            <div className="home">
                <div className="slideshow"/>
                <div className="home-game">
                    <div className="game-header">赛事</div>
                    <div className="game-classify">
                        <span className={this.state.new===true ? 'new1' :'new2'} onClick={this.handleNew.bind(this)}>最新赛事</span>
                        <span className={this.state.host===true ? 'host1' : 'host2'} onClick={this.handleHost.bind(this)}>最热赛事</span>
                    </div>
                    <div className="game-main">
                        {part}
                    </div>
                    <div className="game-footer">
                        <Link to="/list/index"><button>更多赛事</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(ReduxMap.mapStateToProps,ReduxMap.mapDispatchToPropsC)(Home)
