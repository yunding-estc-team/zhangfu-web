import React, { Component } from 'react';
import './index.css'
import png from'../../../../images/wallhaven-dgeqoj.png'
import png1 from'../../../../images/wallhaven-dge9ll.png'
import img from "../../../../images/1.png";
import {Link} from "react-router-dom";



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

        let handList = [
            {
                "background":"png",
                "img":"png1",
                "name":"张云雷",
                "school":"太原理工大学"
            }
        ];
        let data = handList.map(hand =>
            <div className="background">
                {/*背景*/}
                <img className="pag" src={png} alt=""/>
                <div className="inside">
                    {/*头像*/}
                    <img src={png1} alt=""/>
                    {/*姓名*/}
                    <div className="name">{hand.name}</div>
                    {/*大学*/}
                    <div className="school">{hand.school}</div>
                </div>
            </div>
        );
        let partList = [
            {
                "img":"img",
                "name":"张云雷",
                "theme":"2019年云顶暑期实践培训",
                "time":"2019年7月1日-2019年9月7日",
                "type":"团队赛",
                "object":"计算机/算法",
                "award":"获得********赛二等奖",
                "state":"已完成",
            }
        ];
        let data1 = partList.map(part =>
            <div>
                <div className="raced"><span>{part.name}</span>参见的赛事</div>
                <div className="parts">
                    {/*赛事海报*/}
                    <Link to="/area/index"><img src={img} alt=""/></Link>
                    <div className="introduce">
                        {/*赛事名称*/}
                        <Link to="/area/index"><p className="theme">{part.theme}</p></Link>
                        {/*评审时间*/}
                        <p> <span className="iconfont">&#xe62d;</span>评审时间 ：{part.time}</p>
                        {/*赛事类型*/}
                        <p> <span className="iconfont">&#xe61f;</span>{part.type}</p>
                        {/*赛事类型*/}
                        <p> <span className="iconfont">&#xe625;</span>{part.object}</p>
                        {/*获得的奖项*/}
                        <p className="trophy"> <span className="iconfont">&#xe63e;</span>{part.award}</p>
                        {/*赛事状态*/}
                        <p><span className="state">{part.state}</span></p>
                    </div>
                </div>
            </div>

        );

        return(
            <div className="center2">
                {data}
                <div className="center-main">
                    <div className="main-left">
                        {data1}
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
            return 0
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
            return 0
        }
    }
}

export default Personage2