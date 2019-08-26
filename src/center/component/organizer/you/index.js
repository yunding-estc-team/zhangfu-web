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
        let handList = [
            {
                "name":"云竞赛",
                "school":"太原理工大学",
            }
        ];
        let data = handList.map(hand =>
            <div className="section1-main">
                {/*头像*/}
                <img src={organizer} alt=""/>
                {/*名字*/}
                <div className="main-name">{hand.name}</div>
                {/*学校*/}
                <div className="main-school">{hand.school}</div>
            </div>
        );
        let mainList = [
            {
                "name":"云竞赛简介",
                "p1":"故事要从我搬到新出租屋开始讲起。半年前搬到新的出租屋后，房间里配置的洗衣机也比之前的大了一倍，\n" +
                    "而且操作区上分布着的密密麻麻的文字和按钮让洗衣机看起来更高级了，然而这种对它的好感并没有持续多久。\n" +
                    "在我第一次使用它时，我将衣物放进洗衣机后，选择好时间和洗涤方式，按下了启动按钮（如下图右侧白色按钮）。",
                "p2":"按下后洗衣机发出了“滴”的一声，在我的认知里它应该是开始工作了，但是10秒过后没有任何抽水声和洗衣服的声音。\n" +
                    "我疑惑地想：“是不是刚才并没有成功启动？”，于是再次按下了启动按钮，又是“滴”的一声，但是这次我等了 1 分钟没有任何反应。\n" +
                    "之后的十分钟里，我与这台匪夷所思的机器“交涉”多次才理解了它的运行方式。这台洗衣机启动后需要等待大概十几秒才开始运行，\n" +
                    "但是在我按下启动按钮后我得不到任何反馈或者提示来告诉我洗衣机已经开始工作了，所以疑惑的我又按下了一次启动按钮，\n" +
                    "然而令人崩溃的是这台洗衣机的启动和暂停按钮是一体的，我第二次按下实际是进行了暂停操作，从而导致我第二次的困惑。",
                "p3":" 如果你是这台洗衣机的设计师，你会怎么解决上述的问题呢？",
            }
        ];
        let data1 = mainList.map(main =>
            <div className="organizer-section2">
                {/*举办方名字*/}
                <div className="section2-name">{main.name}</div>
                {/*举办方介绍*/}
                <div className="section2-main">
                    <p>{main.p1}</p>
                    <p>{main.p2}</p>
                    <p>{main.p3}</p>
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
        );
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