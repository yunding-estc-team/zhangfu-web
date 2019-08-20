import React, { Component } from 'react';
import './index.css'
import pag from'../../../../images/wallhaven-dgeqoj.png'
import pag1 from'../../../../images/wallhaven-dge9ll.png'
import img from "../../../../images/1.png";
import img0 from "../../../../images/853f400ac858c0f3749601f50a83da0ebdbeede135caf-yYVAGU_fw658.png"
import {NavLink} from "react-router-dom";

// 用户个人中心（自己看）
class Personage1 extends Component{
    constructor(props){
        super(props);
        this.state = {
            up1: true,
            down1: false,
            up2:true,
            down2:false
        };
        this.handleUp = this.handleUp.bind(this);
        this.handleDown = this.handleDown.bind(this);
        this.handleUp2 = this.handleUp2.bind(this);
        this.handleDown2 = this.handleDown2.bind(this)
    }
    render(){
        return(
            <div className="center1">
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
                        <div className="alter">
                            <NavLink to="/information/index"><span className="iconfont">&#xe612;</span>修改资料</NavLink>
                        </div>
                    </div>
                </div>
                <div className="center-main">
                    <div className="main-left">
                        <div className="raced">我参见的赛事</div>
                        <div className="parts">
                            {/*赛事海报*/}
                            <NavLink to="/area/index"><img src={img} alt=""/></NavLink>
                            <div className="introduce">
                                {/*赛事名称*/}
                                <NavLink to="/area/index"><p className="theme">2019年云顶暑期实践培训</p></NavLink>
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
                    <div className="main-right">
                        <div className="attention-header">我的关注</div>
                        <div className="attention-main">
                            <div className="attention-img">
                                {/*关注的比赛的海报/举办方的头像*/}
                                <img src={img0} alt=""/>
                            </div>
                            <div className="attention-right">
                                {/*赛事名称/举办方名称*/}
                                <div className="right-header">互联网+创新创业大赛</div>
                                {/*赛事/举办方通知*/}
                                <div className="right-middle">最新比赛通知将于8月3日</div>
                                <div className="right-check">查看详情</div>
                            </div>
                        </div>
                        <div className="attention-main">
                            <div className="attention-img">
                                <img src={img0} alt=""/>
                            </div>
                            <div className="attention-right">
                                <div className="right-header">互联网+创新创业大赛</div>
                                <div className="right-middle">最新比赛通知将于8月3日</div>
                                <div className="right-check">查看详情</div>
                            </div>
                        </div>
                        <div className={this.state.down2=== true ? '' : 'down2' }>
                            <div className="downs" onClick={this.handleDown2}>
                                <span className="iconfont">&#xe502;</span>
                            </div>
                        </div>
                        <div className={this.state.up2 === true ? '' : 'up2' }>
                            <div className="ups" onClick={this.handleUp2}>
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



    handleUp2(){
        if(this.state.up2 === true){
            this.setState(
                {
                    up2: !this.state.up2,
                    down2: !this.state.down2,
                }
            )
        }else{
            return
        }
    }
    handleDown2(){
        if(this.state.down2 === true){
            this.setState(
                {
                    up2: !this.state.up2,
                    down2: !this.state.down2,
                }
            )
        }else{
            return
        }
    }



}

export default Personage1