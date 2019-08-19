import React, { Component } from 'react';
import './index.css'
import More from "./component";

// 创建赛事
class Set extends Component{
    render(){
        return(
            <div className="set">
                <div className="big-name">创建比赛</div>
                <form action="">
                    <div className="set-main">
                        <form action="">
                            <div className="set-part">
                                <form action="">
                                    <div className="set-title">竞赛封面</div>
                                    <div className="contest-img">
                                        <textarea name="" id="" cols="30" rows="10" placeholder="添加封面，宽度1200，PNG/JPG"/>
                                    </div>
                                    <button className="up-img">上传图片</button>
                                </form>
                            </div>
                            <div className="set-part">
                                <div className="set-title">竞赛名称</div>
                                <input type="text" placeholder="赛事名称"/>
                            </div>
                            <div className="set-part">
                                <div className="set-title">主办单位</div>
                                <div><input type="text" placeholder="主办方名称"/></div>
                            </div>
                            <div className="set-part">
                                <div className="set-title">赛事类型</div>
                                <div className="set-line">
                                    <div className="set-line"><div className="part-circle"/><span>团队赛</span></div>
                                    <div className="set-line"><div className="part-circle"/><span>个人赛</span></div>
                                </div>
                            </div>
                            <div className="set-part">
                                <div className="set-title">报名时间</div>
                                <div className="set-line">
                                    <div><input type="text" placeholder="开始时间"/></div>
                                    <div className="part-solid"/>
                                    <div><input type="text" placeholder="结束时间"/></div>
                                </div>
                            </div>
                            <div className="set-part">
                                <div className="set-title">竞赛时间</div>
                                <div className="set-line">
                                    <div><input type="text" placeholder="开始时间"/></div>
                                    <div className="part-solid"/>
                                    <div><input type="text" placeholder="结束时间"/></div>
                                </div>
                            </div>
                            <div className="set-part">
                                <div className="set-title">赛事介绍</div>
                                <div>
                                    <textarea name="" id="" cols="30" rows="10"/>
                                </div>
                            </div>
                            <div className="set-part">
                                <div className="set-title">竞赛规则</div>
                                <div>
                                    <textarea name="" id="" cols="30" rows="10"/>
                                </div>
                            </div>
                            <div className="set-part">
                                <div className="set-title">竞赛类别</div>
                                <div className="part-classify">
                                    <span className="all">全部</span>
                                    <span>大数据</span>
                                    <span>设计</span>
                                    <span>算法</span>
                                    <span>嵌入式</span>
                                    <span>区块链</span>
                                    <span>区块链</span>
                                    <span>区块链</span>
                                    <span>区块链</span>
                                    <span>区块链</span>
                                    <span>区块链</span>
                                    <span>区块链</span>
                                    <span>区块链</span>
                                    <span>区块链</span>
                                    <span>区块链</span>
                                    <span>区块链</span>
                                    <span>区块链</span>
                                    <span>区块链</span>
                                </div>
                            </div>
                            <div className="set-part">
                                <div className="set-title" >奖项设置</div>
                                <div>
                                    <textarea name="" id="" cols="30" rows="10"/>
                                </div>
                            </div>
                            <div className="set-part">
                                <div className="set-title">赛事链接</div>
                                <div className="link"><input type="text"/></div>
                            </div>
                            <More/>
                            <div className="set-part">
                                <div className="set-circle"><span>+</span></div>
                                <div className="more"><span>添加更多</span></div>
                            </div>
                            <div className="set-part">
                                <button className="part-left">保存信息</button>
                                <button className="part-right">下一步</button>
                            </div>
                        </form>
                    </div>
                </form>
            </div>
        )
     }
}

export default Set