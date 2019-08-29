import React, { Component } from 'react';
import "./index.css"
import organizer from "../../../../images/图片 1.png"
import poster from "../../../../images/853f400ac858c0f3749601f50a83da0ebdbeede135caf-yYVAGU_fw658.png"
import {Link} from "react-router-dom";

// 举办方主页（他人可见）
class Organizer2 extends Component{
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
        let {user,} = this.props;

        let data =
            <div className="section1-main">
                {/*头像*/}
                <img src={organizer} alt=""/>
                {/*名字*/}
                <div className="main-name">{user.name}</div>
                {/*学校*/}
                <div className="main-school">{user.school}</div>
            </div>;

        let data1 =
            <div className="organizer-section2">
                {/*举办方名字*/}
                <div className="section2-name">{user.name}</div>
                {/*举办方介绍*/}
                <div className="section2-main">
                    <p>{user.introduce}</p>
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
            </div>;

        let footList =[
            {
                "name":"‘互联网+’创新创业大赛",
                "time":"2017年7月4日～2017年12月4日",
            }
        ];
        let data2 = footList.map(foot =>
            <div className="organizer-section3">
                <div className="section3-name">历届举办的赛事</div>
                <div className="section3-part">
                    {/*赛事海报*/}
                    <div className="part-img"><img src={poster} alt=""/></div>
                    <div className="part-main">
                        {/*赛事名称*/}
                        <div className="main-name">{foot.name}</div>
                        <div className="main-word">
                            {/*赛事进行时间*/}
                            <span className="word-time">进行时间：{foot.time}</span>
                            <span className="word-check">查看详情</span>
                        </div>
                    </div>
                </div>
            </div>
        );

        return(
            <div className="organizer-center2">
                <div className="organizer-section1">
                    {data}
                </div>
                {data1}
                {data2}
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

export default Organizer2