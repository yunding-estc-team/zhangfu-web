import React, { Component } from 'react';
import './index.css'
import pag from'../../../../images/wallhaven-dgeqoj.png'
import pag1 from'../../../../images/wallhaven-dge9ll.png'
import img from "../../../../images/1.png";



// 用户个人中心（他人可看）
class Personage2 extends Component{
    constructor(props){
        super(props);
        this.state = {
            up1: true,
            down1: false,
        };
        this.handleUp = this.handleUp.bind(this);
        this.handleDown = this.handleDown.bind(this);
    }
    render(){
        return(
            <div className="center2">
                <div className="background">
                    {/*背景*/}
                    <img className="pag" src={pag} alt=""/>
                    <div className="inside">
                        {/*头像*/}
                        <img src={pag1} alt=""/>
                        {/*姓名*/}
                        <div className="name">张云雷</div>
                        {/*大学*/}
                        <div className="school">太原理工大学</div>
                    </div>
                </div>
                <div className="center-main">
                    <div className="main-left">
                        {/*谁参加的赛事*/}
                        <div className="raced"><span>张云雷</span>参见的赛事</div>
                        <div className="parts">
                            {/*赛事海报*/}
                            <img src={img} alt=""/>
                            <div className="introduce">
                                {/*赛事名称*/}
                                <p className="theme">2019年云顶暑期实践培训</p>
                                {/*评审时间*/}
                                <p> <span className="iconfont">&#xe62d;</span>评审时间 ：2019年7月1日-2019年9月7日</p>
                                {/*赛事类型*/}
                                <p> <span className="iconfont">&#xe61f;</span>团队赛</p>
                                {/*赛事类型*/}
                                <p> <span className="iconfont">&#xe625;</span>计算机/算法</p>
                                {/*获得的奖项*/}
                                <p className="trophy"> <span className="iconfont">&#xe63e;</span>获得********赛二等奖</p>
                                {/*赛事状态*/}
                                <p><span className="state">已完成</span></p>
                            </div>
                        </div>
                        <div className={this.state.down1=== true ? '' : 'down1' }>
                            <div className="down" onClick={this.handleDown}>
                                <span className="iconfont">&#xe502;</span>
                            </div>
                        </div>
                        <div className={this.state.up1 === true ? '' : 'up1' }>
                            <div className="up" onClick={this.handleUp}>
                                <span className="iconfont">&#xe605;</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    handleUp(){
        if(this.state.up1 === true){
            this.setState(
                {
                    up1: !this.state.up1,
                    down1: !this.state.down1,
                }
            )
        }else{
            return
        }
    }
    handleDown(){
        if(this.state.down1 === true){
            this.setState(
                {
                    up1: !this.state.up1,
                    down1: !this.state.down1,
                }
            )
        }else{
            return
        }
    }
}

export default Personage2