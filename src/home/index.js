import React, { Component } from 'react';
import './index.css'
import img4 from '../images/1.png'
import {NavLink} from "react-router-dom";
// 首页
class Home extends Component{
    render(){
        return(
            <div className="home">
                <div className="slideshow"/>
                <div className="home-game">
                    <div className="game-header">赛事</div>
                    <div className="game-classify">
                        <span>最热赛事</span>
                        <span>最新赛事</span>
                    </div>
                    <div className="game-main">
                        <NavLink to="/area/index">
                            <div className="games">
                                {/*赛事海报*/}
                                <img src={img4} alt=""/>
                                <div>
                                    {/*赛事名称*/}
                                    <div className="game-name">2019年云顶暑期实践培训</div>
                                    <div className="game-details">
                                        <div className="details-left">
                                            {/*赛事时间*/}
                                            <div><span className="iconfont">&#xe716;</span><span className="word">2019年7月1日-2019年9月7日</span></div>
                                            {/*赛事状态*/}
                                            <div className="game-state1"><span className="iconfont">&#xe61b;</span><span className="word">已结束</span></div>
                                        </div>
                                        <div className="details-right">
                                            {/*赛事类型*/}
                                            <div className="personage"><span className="iconfont">&#xe713;</span><span className="word">团队赛</span></div>
                                            {/*报名人数*/}
                                            <div><span className="iconfont">&#xe61c;</span><span className="word">1990人</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                        <NavLink to="/area/index">
                            <div className="games">
                                <img src={img4} alt=""/>
                                <div>
                                    <div className="game-name">2019年云顶暑期实践培训</div>
                                    <div className="game-details">
                                        <div className="details-left">
                                            <div><span className="iconfont">&#xe716;</span><span className="word">2019年7月1日-2019年9月7日</span></div>
                                            <div className="game-state2"><span className="iconfont">&#xe62f;</span><span className="word">评审中</span></div>
                                        </div>
                                        <div className="details-right">
                                            <div className="personage"><span className="iconfont">&#xe713;</span><span className="word">团队赛</span></div>
                                            <div><span className="iconfont">&#xe61c;</span><span className="word">1990人</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                        <NavLink to="/area/index">
                            <div className="games">
                                <img src={img4} alt=""/>
                                <div>
                                    <div className="game-name">2019年云顶暑期实践培训</div>
                                    <div className="game-details">
                                        <div className="details-left">
                                            <div><span className="iconfont">&#xe716;</span><span className="word">2019年7月1日-2019年9月7日</span></div>
                                            <div className="game-state3"><span className="iconfont">&#xe82e;</span><span className="word">报名中</span></div>
                                        </div>
                                        <div className="details-right">
                                            <div className="personage"><span className="iconfont">&#xe601;</span><span className="word">个人赛</span></div>
                                            <div><span className="iconfont">&#xe620;</span><span className="word">1990人</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                        <NavLink to="/area/index">
                            <div className="games">
                                <img src={img4} alt=""/>
                                <div>
                                    <div className="game-name">2019年云顶暑期实践培训</div>
                                    <div className="game-details">
                                        <div className="details-left">
                                            <div><span className="iconfont">&#xe716;</span><span className="word">2019年7月1日-2019年9月7日</span></div>
                                            <div className="game-state1"><span className="iconfont">&#xe61b;</span><span className="word">已结束</span></div>
                                        </div>
                                        <div className="details-right">
                                            <div className="personage"><span className="iconfont">&#xe713;</span><span className="word">团队赛</span></div>
                                            <div><span className="iconfont">&#xe61c;</span><span className="word">1990人</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                        <NavLink to="/area/index">
                            <div className="games">
                                <img src={img4} alt=""/>
                                <div>
                                    <div className="game-name">2019年云顶暑期实践培训</div>
                                    <div className="game-details">
                                        <div className="details-left">
                                            <div><span className="iconfont">&#xe716;</span><span className="word">2019年7月1日-2019年9月7日</span></div>
                                            <div className="game-state2"><span className="iconfont">&#xe62f;</span><span className="word">评审中</span></div>
                                        </div>
                                        <div className="details-right">
                                            <div className="personage"><span className="iconfont">&#xe713;</span><span className="word">团队赛</span></div>
                                            <div><span className="iconfont">&#xe61c;</span><span className="word">1990人</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                        <NavLink to="/area/index">
                            <div className="games">
                                <img src={img4} alt=""/>
                                <div>
                                    <div className="game-name">2019年云顶暑期实践培训</div>
                                    <div className="game-details">
                                        <div className="details-left">
                                            <div><span className="iconfont">&#xe716;</span><span className="word">2019年7月1日-2019年9月7日</span></div>
                                            <div className="game-state3"><span className="iconfont">&#xe82e;</span><span className="word">报名中</span></div>
                                        </div>
                                        <div className="details-right">
                                            <div className="personage"><span className="iconfont">&#xe601;</span><span className="word">个人赛</span></div>
                                            <div><span className="iconfont">&#xe620;</span><span className="word">1990人</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <div className="game-footer">
                        <NavLink to="/list/index"><button>更多赛事</button></NavLink>
                    </div>
                </div>
            </div>
        )
     }
}

export default Home
