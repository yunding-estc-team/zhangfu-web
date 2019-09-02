import React, { Component } from 'react';
import "./Classify.css"


// 分类
class Classify extends Component{
    render(){
        return(
            <div>
                <div className="classify">
                    <div className="type">
                        <span className="subhead">行业 :</span>
                        <div className="specific">
                            <span> <button>全部</button></span>
                            <span>大数据</span>
                            <span>设计</span>
                            <span>算法</span>
                            <span>嵌入式</span>
                            <span>区块链</span>
                            <span>生物</span>
                            <span>化学</span>
                            <span>物理</span>
                        </div>
                        <div> <span className="iconfont">&#xe55b;</span></div>
                    </div>
                    <div className="type">
                        <span className="subhead">状态 :</span>
                        <div className="specific">
                            <span> <button>全部</button></span>
                            <span>即将开始</span>
                            <span>报名中</span>
                            <span>评审中</span>
                            <span>已结束</span>
                        </div>
                    </div>
                    <div className="type">
                        <span className="subhead">类型 :</span>
                        <div className="specific">
                            <span><button>全部</button></span>
                            <span>个人赛</span>
                            <span>团队赛</span>
                        </div>
                    </div>
                </div>
            </div>
        )
     }
}

export default Classify