import React, { Component } from 'react';
import './index.css'
import api from "../../../../config/url";
import Tools from "../../../../util/Tools";

/**
 * @Data 2019年8月28日04点27分
 */

// 验证身份后时的获奖验证
class Approve1 extends Component{

    constructor(props){
        super(props);
        this.state= {

            // 认证获奖记录
            prizeInfo:{
                // 赛事名称
                competitionName : "",
                // 奖项名称
                reward: "",
                // 附件
                cover: ""
            },

            // 是否可以提交
            prevent:true,
            // 消息
            msg:"",
        }
    };

    // setter
    setPrizeInfo = (c)=>{
        this.setState(Object.assign(this.state.prizeInfo,c));
    };

    // 认证获奖记录 - 附件上传
    handlePrizeInfo = (e) => {
        // 设置图片路径
        this.setPrizeInfo({cover:e.targer.files[0]});
        // 获取其他信息
        Tools.upload(this.state.prizeInfo.cover)
            .then(res=>{
                if(res.data.success===true){
                    console.log(res.data);
                    this.setPrizeInfo(
                        {
                            // 赛事名称
                            competitionName:res.data.data.competitionName,
                            // 奖项名称
                            reward:res.data.data.reward
                        }
                    );
                    this.setState({msg:""});
                }else{
                    this.setState({msg:"上传失败"});
                }}
            );
    };

    render(){
        let {user,submitUC}=this.props;
        return(
            <div className="Approve1">
                <div className="segment">
                    <span className="segment-theme">实名认证</span>
                    // todo 查询用户是否通过实名认证
                    <span className="segment-over">已完成</span>
                    <span className="segment-check">查看详情</span>
                </div>
                <div className="segment1">
                    <div className="segment1-theme">认证获奖记录</div>
                    <div className="segment1-name">
                        <span>姓名：</span><span className="details">{user.name}</span>
                    </div>
                    <div className="segment1-number">
                        <span>学号：</span><span className="details">{user.number}</span>
                    </div>
                    <div className="segment1-information">
                        // todo 修改页面 @张富
                        <div>参赛者信息:</div>
                        <div className="details">
                            赛事名称及基本信息等。
                        </div>
                    </div>
                    <div className="segment1-explain">
                        // todo 文件上传
                        <span className="iconfont">&#xe633;</span>
                        <input className="add" placeholder="添加附件" type="file" onChange={this.handlePrizeInfo}/>
                        <span>（已上传*******）</span>
                    </div>
                    <div className="segment1-button">
                        <button onClick={submitUC(api.user.insertPrizeInfo)}>确定</button>
                        <button className="return">返回</button>
                    </div>
                </div>
            </div>
        )
     }
}

export default Approve1