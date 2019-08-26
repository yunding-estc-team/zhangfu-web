import React, { Component } from 'react';
import './index.css'
import img4 from '../images/1.png'
import {Link} from "react-router-dom";
// 首页
class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            new:true,
            host:false,
        }
    }
    handleNew(){
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
        let gameList = [
            {
                "img":"../images/1.png",
                "name":"2019年云顶暑期实践培训",
                "time":"2019年7月1日-2019年9月7日",
                "state":"已结束",
                "personage":"团队赛",
                "people":"1990人"
            },
            {
                "img":"img4",
                "name":"2019年云顶暑期实践培训",
                "iconfont0":"&#xe716",
                "time":"2019年7月1日-2019年9月7日",
                "iconfont1":"&#xe61b",
                "state":"已结束",
                "iconfont2":"&#xe713",
                "personage":"团队赛",
                "iconfont3":"&#xe61c",
                "people":"1990人"
            },
            {
                "img":"img4",
                "name":"2019年云顶暑期实践培训",
                "iconfont0":"&#xe716",
                "time":"2019年7月1日-2019年9月7日",
                "iconfont1":"&#xe61b",
                "state":"已结束",
                "iconfont2":"&#xe713",
                "personage":"团队赛",
                "iconfont3":"&#xe61c",
                "people":"1990人"
            },
            {
                "img":"img4",
                "name":"2019年云顶暑期实践培训",
                "iconfont0":"&#xe716",
                "time":"2019年7月1日-2019年9月7日",
                "iconfont1":"&#xe61b",
                "state":"已结束",
                "iconfont2":"&#xe713",
                "personage":"团队赛",
                "iconfont3":"&#xe61c",
                "people":"1990人"
            },
            {
                "img":"img4",
                "name":"2019年云顶暑期实践培训",
                "iconfont0":"&#xe716",
                "time":"2019年7月1日-2019年9月7日",
                "iconfont1":"&#xe61b",
                "state":"已结束",
                "iconfont2":"&#xe713",
                "personage":"团队赛",
                "iconfont3":"&#xe61c",
                "people":"1990人"
            },
            {
                "img":"img4",
                "name":"2019年云顶暑期实践培训",
                "iconfont0":"&#xe716",
                "time":"2019年7月1日-2019年9月7日",
                "iconfont1":"&#xe61b",
                "state":"已结束",
                "iconfont2":"&#xe713",
                "personage":"团队赛",
                "iconfont3":"&#xe61c",
                "people":"1990人"
            },
        ];
        let part = gameList.map(game =>
            <div>
                <Link to="/area/index">
                    <div className="games">
                        <img src={img4} alt=""/>
                        <div>
                            <div className="game-name">{game.name}</div>
                            <div className="game-details">
                                <div className="details-left">
                                    <div><span className="iconfont">&#xe716;</span><span
                                        className="word">{game.time}</span></div>
                                    <div className="game-state2"><span className="iconfont">&#xe61b;</span><span
                                        className="word">{game.state}</span></div>
                                </div>
                                <div className="details-right">
                                    <div className="personage"><span className="iconfont">&#xe713;</span><span
                                        className="word">{game.personage}</span></div>
                                    <div><span className="iconfont">&#xe61c;</span><span
                                        className="word">{game.people}</span></div>
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
                        <span className={this.state.new===true ? 'new1' :'new2'} onClick={this.handleNew.bind(this)}>最热赛事</span>
                        <span className={this.state.host===true ? 'host1' : 'host2'} onClick={this.handleHost.bind(this)}>最新赛事</span>
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

export default Home
