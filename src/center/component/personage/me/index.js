import React, { Component } from 'react';
import './index.css';
import png from'../../../../images/wallhaven-dgeqoj.png';
import png1 from'../../../../images/wallhaven-dge9ll.png';
import img from "../../../../images/1.png";
import img0 from "../../../../images/853f400ac858c0f3749601f50a83da0ebdbeede135caf-yYVAGU_fw658.png";
import {Link} from "react-router-dom";
import UserApi from "../../../../config/userApi";

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

    componentDidMount=()=>{
        let {setCL}=this.props;
        // 获取得奖赛事信息
        UserApi.findHistoryPrize({c:1,p:3})
            .then(res=>{
                setCL(res.data.data);
            })
    };
    render(){
        /**
            {
                "background":"png",
                "img":"png1",
                "name":"张云雷",
                "school":"太原理工大学"
            }
         */

        let {user,competitionList}=this.props;
        let data =
            <div className="background">
                {/*背景*/}
                <img className="pag" src={png} alt=""/>
                <div className="inside">
                    {/*头像*/}
                    <img src={png1} alt=""/>
                    {/*姓名*/}
                    <div className="name">{user.userName}</div>
                    {/*大学*/}
                    <div className="school">{user.school}</div>
                    <div className="alter">
                        <Link to="/information/index"><span className="iconfont">&#xe612;</span>修改资料</Link>
                    </div>
                </div>
            </div>
        ;
        // let partList = [
        //     {
        //         "img":"img",
        //         "theme":"2019年云顶暑期实践培训",
        //         "time":"2019年7月1日-2019年9月7日",
        //         "type":"团队赛",
        //         "object":"计算机/算法",
        //         "award":"获得********赛二等奖",
        //         "state":"已完成",
        //     }
        // ];
        let data1 = competitionList.map(part =>
            <div className="parts">
                {/*赛事海报*/}
                <Link to="/area/index"><img src={img} alt=""/></Link>
                <div className="introduce">
                    {/*赛事名称*/}
                    <Link to="/area/index"><p className="theme">{part.name}</p></Link>
                    {/*评审时间*/}
                    <p> <span className="iconfont">&#xe62d;</span>评审时间 ：{part.createAt}</p>
                    {/*赛事类型*/}
                    <p> <span className="iconfont">&#xe61f;</span>{part.type}</p>
                    {/*赛事类型*/}
                    <p> <span className="iconfont">&#xe625;</span>{part.object}</p>
                    {/*获得的奖项*/}
                    <p className="trophy"> <span className="iconfont">&#xe63e;</span>{part.reward}</p>
                    {/*赛事状态*/}
                    {/*<p><span className="state">{part.state}</span></p>*/}
                </div>
            </div>
        );
        let rightList = [
            {
                "img":"img0",
                "name":"互联网+创新创业大赛",
                "attention":"最新比赛通知将于8月3日",
            }
        ];
        let data2 = rightList.map(right =>
            <div className="attention-main">
                <div className="attention-img">
                    {/*关注的比赛的海报/举办方的头像*/}
                    <img src={img0} alt=""/>
                </div>
                <div className="attention-right">
                    {/*赛事名称/举办方名称*/}
                    <div className="right-header">{right.name}</div>
                    {/*赛事/举办方通知*/}
                    <div className="right-middle">{right.attention}</div>
                    <div className="right-check">查看详情</div>
                </div>
            </div>
        );

        return(
            <div className="center1">
                {data}
                <div className="center-main">
                    <div className="main-left">
                        <div className="raced">我参见的赛事</div>
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
                    <div className="main-right">
                        <div className="attention-header">我的关注</div>
                        {data2}
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
    handleUp2(){
        if(this.state.up2 === true){
            this.setState(
                {
                    up2: !this.state.up2,
                    down2: !this.state.down2,
                }
            )
        }else{
            return 0
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
            return 0
        }
    }
}

export default Personage1