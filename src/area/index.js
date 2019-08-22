import React, { Component } from 'react';
import './index.css'
import Reply from "../message/component/answers/reply";
// 赛事详情
class Area extends Component{
    render(){
        let headerList = [
            {
                "redu":"123456",
                "guanzhudu":"123456",
                "dianjiliang":"123456"
            }
        ];
        let data1 = headerList.map(header =>
            <div>
                <span><span className="iconfont">&#xe66e;</span><span>{header.redu}</span></span>
                <span><span className="iconfont">&#xe7d4;</span><span>{header.guanzhudu}</span></span>
                <span><span className="iconfont">&#xe694;</span><span>{header.dianjiliang}</span></span>
            </div>
        );
        let leftList = [
            {
                "name":"2019年云顶暑期实践培训",
                "introduce":" Honda节能竞技大赛由Honda创始人本田宗一郎先生发起，于1981年在日本创办，每年都有超过500支车队" +
                    " 参加比赛。自2007年Honda节能竞技大赛来到中国成为Honda中国节能竞技大赛，至今为止已经成功举办了" +
                    "12届。比赛搭载Honda统一提供的125cc低油耗4冲程发动机，车架和车身等则由各车队独立创作完成，最终" +
                    "以燃油的消耗量多少而一决胜负。为启发人们对新能源的思考， 2011年更在中国首创了电动组别的比赛，参" +
                    " 赛车辆使用大赛指定电池并将该电池作为车辆行驶的唯一动力源。",
                "matter":"以团队形式参赛，每支队伍3-6人，于2019年5月17日前提交立项书进行报名，暑假进行调研，于9月1日至11月30日期间进行决赛。"
            }
        ];
        let data2 = leftList.map(left =>
            <div className="particulars-left">
                {/*赛事名称*/}
                <div className="match-name">{left.name}</div>
                <div className="match-area">
                    <div className="details-first">
                        <div className="first-title">竞赛信息</div>
                        <div className="first-question">
                            <div className="question-circle">?</div>
                            <div className="question-letter">仍有疑问</div>
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
                            {left.introduce}
                        </div>
                    </div>
                    <div className="details-fourth">
                        <div className="third-title">
                            <div className="title-number">2</div>
                            <div className="title-name">竞赛规则</div>
                        </div>
                        {/*赛事规则*/}
                        <div className="details-word">
                            {left.matter}
                        </div>
                    </div>
                </div>
                <div className="catechism">
                    <div className="catechism-name">赛事问答</div>
                    <div className="catechism-input">
                        <input type="text" name="" id="" placeholder="问点什么吧"/>
                        <button>我要提问</button>
                    </div>
                    <div className="catechism-main">
                        <div className="main-question">
                            <div className="main-circle"><span>问</span></div>
                            <div className="problem">
                                {/*问题*/}
                                <div className="problem-details">这个比赛主要是干嘛这个比赛主要是干嘛这个比赛主要是干嘛这个比赛主要是干嘛这个比赛主要是干嘛这个比赛主要是干这个比赛主要是干嘛</div>
                                <div className="problem-footer">
                                    {/*提问时间*/}
                                    <span className="problem-time">提问于 <span>2019年8月15日</span></span>
                                    <Reply/>
                                </div>
                            </div>
                        </div>
                        <div className="main-question">
                            <div className="main-circle"><span>问</span></div>
                            <div className="problem">
                                <div className="problem-details">这个比赛主要是干嘛这个比赛主要是干嘛这个比赛主要是干嘛这个比赛主要是干嘛这个比赛主要是干嘛这个比赛主要是干这个比赛主要是干嘛</div>
                                <div className="problem-footer">
                                    <span className="problem-time">提问于 <span>2019年8月15日</span></span>
                                    {/*<Reply/>*/}
                                </div>
                            </div>
                        </div>
                        <div className="main-question">
                            <div className="main-circle"><span>问</span></div>
                            <div className="problem">
                                <div className="problem-details">这个比赛主要是干嘛这个比赛主要是干嘛这个比赛主要是干嘛这个比赛主要是干嘛这个比赛主要是干嘛这个比赛主要是干这个比赛主要是干嘛</div>
                                <div className="problem-footer">
                                    <span className="problem-time">提问于 <span>2019年8月15日</span></span>
                                    {/*<Reply/>*/}
                                </div>
                            </div>
                        </div>
                        <div className="main-question">
                            <div className="main-circle"><span>问</span></div>
                            <div className="problem">
                                <div className="problem-details">这个比赛主要是干嘛这个比赛主要是干嘛这个比赛主要是干嘛这个比赛主要是干嘛这个比赛主要是干嘛这个比赛主要是干这个比赛主要是干嘛</div>
                                <div className="problem-footer">
                                    <span className="problem-time">提问于 <span>2019年8月15日</span></span>
                                    {/*<Reply/>*/}
                                </div>
                            </div>
                        </div>
                        <div className="main-question">
                            <div className="main-circle"><span>问</span></div>
                            <div className="problem">
                                <div className="problem-details">这个比赛主要是干嘛这个比赛主要是干嘛这个比赛主要是干嘛这个比赛主要是干嘛这个比赛主要是干嘛这个比赛主要是干这个比赛主要是干嘛</div>
                                <div className="problem-footer">
                                    <span className="problem-time">提问于 <span>2019年8月15日</span></span>
                                    {/*<Reply/>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
        let rightList = [
            {
                "name":"太原理工大学",
                "type":"团队赛",
                "singtime":"2019.07.01-2019.09.07",
                "gametime":"2019.07.01-2019.09.07",
                "subject":"计算机"
            }
        ];
        let data3 = rightList.map(right =>
            <div className={"particulars-right"}>
                <div className="right-section">
                    <span className="right-type">主办单位</span>
                    <div className="sponsor">
                        <div className="sponsor-picture"><img src="" alt=""/></div>
                        {/*主办单位*/}
                        <div className="sponsor-name">{right.name}</div>
                    </div>
                </div>
                <div className="right-section">
                    <span className="right-type">赛事类型</span>
                    {/*赛事类型*/}
                    <span className="type-word">{right.type}</span>
                </div>
                <div className="right-section">
                    <span className="right-type">报名时间</span>
                    {/*报名时间*/}
                    <span className="type-word">{right.singtime}</span>
                </div>
                <div className="right-section">
                    <span className="right-type">比赛时间</span>
                    {/*比赛时间*/}
                    <span className="type-word">{right.gametime}</span>
                </div>
                <div className="right-section">
                    <span className="right-type">学科类型</span>
                    {/*学科类型*/}
                    <span className="type-word">{right.subject}</span>
                </div>
            </div>
        );



        return(
            <div className="area">
                <div className="picture">
                    <button>关注</button>
                    <button>认领赛事</button>
                </div>
                <div className="area-header">
                    <div className="header-left">竞赛信息</div>
                    <div className="header-left">问答</div>
                    <div className="header-middle">
                        {data1}
                    </div>
                    <div className="header-button">
                        <button>立即报名</button>
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

export default Area