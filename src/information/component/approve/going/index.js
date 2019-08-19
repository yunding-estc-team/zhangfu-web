import React, { Component } from 'react';
import './index.css';
import approve from '../../../../images/shenfenzhengzhengmian.png'

// 未验证身份时验证获奖的页面

class Approve extends Component{
    render(){
        return(
            <div className="approve">
                <div className="approve-portion">
                    <form action="">
                        <div className="portion-theme">实名认证</div>
                        <div className="portion-img"><img src={approve} alt=""/></div>
                        <div className="portion-explain">（请将学生卡有照片一面上传）</div>
                        <div className="portion-button"><button>确认</button><button className="return">返回</button></div>
                    </form>
                </div>
                <div className="approve-portion1">
                    <form action="">
                        <div className="portion1-theme">认证获奖记录</div>
                        <div className="portion1-name">
                            {/*输入姓名*/}
                            <span>姓名：</span><span><input type="text"/></span>
                        </div>
                        <div className="portion1-number">
                            {/*输入学号*/}
                            <span>学号：</span><span><input type="text" placeholder="例如：2018005783"/></span>
                        </div>
                        <div className="portion1-information">
                            {/*赛事名称及基本信息等*/}
                            <span>参赛者信息：</span><span><textarea name="" id="" cols="30" rows="10" placeholder="赛事名称及基本信息等"/></span>
                        </div>
                        <div className="portion1-explain">
                            <span className="iconfont">&#xe633;</span><span className="add">添加附件</span><span>（上传有效文件或照片）</span>
                        </div>
                        <div className="portion1-button">
                            <button>确认</button>
                            <button className="return">返回</button>
                        </div>
                    </form>
                </div>
            </div>
        )
     }
}

export default Approve