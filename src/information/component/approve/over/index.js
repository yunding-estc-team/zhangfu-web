import React, { Component } from 'react';
import './index.css'


// 验证身份后时的获奖验证
class Approve1 extends Component{
    render(){
        return(
            <div className="Approve1">
                <div className="segment">
                    <span className="segment-theme">实名认证</span>
                    <span className="segment-over">已完成</span>
                    <span className="segment-check">查看详情</span>
                </div>
                <div className="segment1">
                    <div className="segment1-theme">认证获奖记录</div>
                    <div className="segment1-name">
                        <span>姓名：</span><span className="details">张三</span>
                    </div>
                    <div className="segment1-number">
                        <span>学号：</span><span className="details">2018005783</span>
                    </div>
                    <div className="segment1-information">
                        <div>参赛者信息:</div>
                        <div className="details">
                            赛事名称及基本信息等。
                        </div>
                    </div>
                    <div className="segment1-explain">
                        <span className="iconfont">&#xe633;</span><span className="add">添加附件</span><span>（已上传*******）</span>
                    </div>
                    <div className="segment1-button">
                        <button>确定</button>
                        <button className="return">返回</button>
                    </div>
                </div>
            </div>
        )
     }
}

export default Approve1