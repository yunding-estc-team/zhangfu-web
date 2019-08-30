import React, { Component } from 'react';
import './index.css'
import More from "./component";
import {Link} from "react-router-dom";
import axios from 'axios';
import {instance,api} from '../config/url'
import {CompetitionModel} from "../config/model";
import ReduxMap from "../utils/ReduxMap";
import {connect} from "react-redux";

// 创建赛事
class Set extends Component{

    constructor(props){
        super(props);
        this.state= {
            competition:{
                    // 封面
                    cover:"",
                    hash:"",
                    content:"",
            },
            // 是否可以提交
            prevent:true,
        }
    };



    // 上传图片获取路径
    handleChangePicture=(e)=>{
        // 结果在msg中
        let {setMsg,setC}=this.props;

        //  获取input框中的文件
        this.setCompetition({cover:e.target.files[0]});

        // 调用上传方法，获取路径
        Set.upload(this.state.competition.cover)
            .then(res=>{
                if(res.data.success===true){
                    setC({file:res.data.data.url,hash:res.data.data.hash}
                    );
                    setMsg("")
                }else{
                    setMsg("上传失败");
                }}
            );
    };

    // upload picture
    static upload=(file)=>{
        const pictureUrl = "https://sm.ms/api/upload";
        let form = new FormData();
        let config = {headers: {'Content-Type': 'multipart/form-data'}};
        console.log(file);
        form.append("smfile", file);
        return axios.post(pictureUrl, form,config);
    };


    submit=()=>{
        let {competition,setMsg}=this.props;

        // 检查空值

        // 提交
        instance.post(api.competition.postCompetition,competition)
            .then(res=>{
                if(res.data.code==="200"){
                    setMsg("");
                }else{
                    setMsg("上传失败");
                }
                }
            )
    };


    // todo 103,105行的id有作用吗
    render(){
        // 获取赛事类型
        let {msg,saveC,setC}=this.props;

        // 遍历获取
        let typeList=[]
        let type = typeList.map(type =>
            (<div>
                <span className="mold">{type.object}</span>
            </div>)
        );

        return(
            <div className="set">
                <div className="big-name">创建比赛</div>
                <div className="set-main">
                    <div className="set-part">
                        <div className="set-title">竞赛封面</div>
                        <div className="contest-img">
                            <textarea name=""  cols="30" rows="10" placeholder="添加封面，宽度1200，PNG/JPG" />
                        </div>
                        <button className="up-img">上传图片</button>
                        <input className="button" type="file" onChange={this.handleChangePicture} />
                        <span className="mag">{msg}</span>
                    </div>
                    <div className="set-part">
                        <div className="set-title">竞赛名称</div>
                        <input type="text" placeholder="赛事名称" theme={this.state.theme} id="theme" onChange={saveC}/>
                    </div>
                    <div className="set-part">
                        <div className="set-title">主办单位</div>
                        <div><input type="text" placeholder="主办方名称" name={this.state.name} id="name" onChange={saveC}/></div>
                    </div>
                    <div className="set-part">
                        <div className="set-title">赛事类型</div>
                        <div className="set-line">
                            <div className="set-line"><div className="part-circle" onClick={()=>setC({[CompetitionModel.individual]:"0"})}/><span>团队赛</span></div>
                            <div className="set-line"><div className="part-circle" onClick={()=>setC({[CompetitionModel.individual]:"1"})}/><span>个人赛</span></div>
                        </div>
                    </div>
                    <div className="set-part">
                        <div className="set-title">报名时间</div>
                        <div className="set-line">
                            <div><input type="text" placeholder="开始时间" start1={this.state.state1} id="state1" onChange={this.inputChange}/></div>
                            <div className="part-solid"/>
                            <div><input type="text" placeholder="结束时间" over1={this.state.over1} id="over1" onChange={this.inputChange}/></div>
                        </div>
                    </div>
                    <div className="set-part">
                        <div className="set-title">竞赛时间</div>
                        <div className="set-line">
                            <div><input type="text" placeholder="开始时间" start2={this.state.state2} id="state2" onChange={this.inputChange}/></div>
                            <div className="part-solid"/>
                            <div><input type="text" placeholder="结束时间" over2={this.state.over2} id="over2" onChange={this.inputChange}/></div>
                        </div>
                    </div>
                    <div className="set-part">
                        <div className="set-title">赛事介绍</div>
                        <div>
                            <textarea name=""  cols="30" rows="10" introduce={this.state.introduce} id={CompetitionModel.introduction} onChange={saveC}/>
                        </div>
                    </div>
                    <div className="set-part">
                        <div className="set-title">竞赛规则</div>
                        <div>
                            <textarea name=""  cols="30" rows="10" rule={this.state.rule} id={CompetitionModel.content} onChange={saveC}/>
                        </div>
                    </div>
                    <div className="set-part">
                        <div className="set-title">竞赛类别</div>
                        <div className="part-classify">
                            <span className="all">全部</span>
                            {type}
                        </div>
                    </div>
                    <div className="set-part">
                        <div className="set-title">赛事链接</div>
                        <div className="link"><input type="text" link={this.state.link} id={CompetitionModel.joinLink} onChange={saveC}/></div>
                    </div>
                    <More/>
                    <div className="set-part">
                        <div className="set-circle"><span>+</span></div>
                    <div className="more"><span>添加更多</span></div>
                </div>
                <div className="set-part">
                    <Link to="/area/index"><button className="part-left" onClick={this.submit}>保存信息</button></Link>
                    <button className="part-right">下一步</button>
                </div>
                </div>
            </div>
        )
     }
}

export default connect(ReduxMap.mapStateToProps,ReduxMap.mapDispatchToPropsC)(Set)