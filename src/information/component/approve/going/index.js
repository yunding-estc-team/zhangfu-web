import React, { Component } from 'react';
import './index.css';
import approve from '../../../../images/shenfenzhengzhengmian.png'
import api from "../../../../config/url";
import Tools from '../../../../util/Tools'

// 未验证身份时验证获奖的页面
/**
 * @Data 2019年8月28日04点28分
 */

class Approve extends Component{

    constructor(props){
        super(props);
        this.state= {

            // 学生卡图片
            studentsCards:{
                // 路径
                cover : "",
            },

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
    setStudentsCards=(c)=>{
        this.setState(Object.assign(this.state.studentsCards,c));
    };
    // setter
    setPrizeInfo = (c)=>{
        this.setState(Object.assign(this.state.prizeInfo,c));
    };

    // 实名认证 - 图片上传
    handleStudentsCards = (e) => {
        // 设置图片路径
        this.setStudentsCards({cover:e.target.files[0]});
        // 上传
        Tools.upload(this.state.studentsCards.cover)
            .then(res=>{
                    if(res.data.success===true){
                        console.log(res.data);
                        this.setState({msg:""});
                    }else{
                        this.setState({msg:"上传失败"});
                    }}
            );
        console.log(this.state.studentsCards);
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
        let {saveUC,submitUC} = this.props;
        return(
            <div className="approve">
                <div className="approve-portion">
                    // todo 添加文件上传
                    <form action="">
                        <div className="portion-theme">实名认证</div>
                        <div className="portion-img">
                            <img src={approve} alt=""/>
                            <input className="add" type="file" onChange={this.handleStudentsCards}/>
                        </div>
                        <div className="portion-explain">（请将学生卡有照片一面上传）</div>
                        <div className="portion-button">
                            <button onClick={submitUC(api.user.uploadStd)}>确认</button>
                            <button className="return">返回</button>
                        </div>
                    </form>
                </div>
                <div className="approve-portion1">
                    <form action="">
                        <div className="portion1-theme">认证获奖记录</div>
                        <div className="portion1-name">
                            // todo 修改页面 @张富
                            {/*输入姓名*/}
                            <span>姓名：</span><span><input id="userName" type="text" onChange={saveUC}/></span>
                        </div>
                        <div className="portion1-number">
                            {/*输入学号*/}
                            <span>参与的赛事：</span><span><input id="number" type="text" placeholder="例如：2018005783" onChange={saveUC}/></span>
                        </div>
                        <div className="portion1-information">
                            {/*赛事名称及基本信息等*/}
                            <span>所获得的奖项：</span><span><textarea id="" cols="30" rows="10" placeholder="赛事名称及基本信息等"/></span>
                        </div>
                        <div className="portion1-explain">
                            // todo 文件上传
                            <span className="iconfont">&#xe633;</span>
                            <input className="add" placeholder="添加附件" type="file" onChange={this.handlePrizeInfo}/>
                            <span>（上传有效文件或照片）</span>
                        </div>
                        <div className="portion1-button">
                            <button onClick={submitUC(api.user.insertPrizeInfo)}>确认</button>
                            <button className="return">返回</button>
                        </div>
                    </form>
                </div>
            </div>
        )
     }
}

export default Approve