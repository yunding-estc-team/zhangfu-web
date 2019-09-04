import React, { Component } from 'react';
import './personal.css'
import {UserModel} from "../../../config/model";
import {connect} from "react-redux";
import ReduxMap from "../../../store/ReduxMap";
import UserApi from "../../../config/userApi";
import "../../../common/Extra/msg.css"
import { Select } from 'antd';

/**
 * 修改个人资料
 * @Data 2019年8月28日05点09分
 * @Data 2019年09月03日15:58:25
 */
class Personal extends Component{
    constructor(props){
        super(props);
        this.state={
            circle1:true,
            circle2:false,
        };

    }


    componentDidMount=()=>{
        let {setU}=this.props;
        console.log("did")
        // 获取用户信息
        UserApi.getInfo()
            .then(res=>{
                console.log(res.data);
                setU(res.data.data);
            })
    };




    // 选择学历
    changeLevel=(e)=>{
        let {setU}=this.props;
        setU({level:e.nativeEvent.target.value})
    };

    // 提交修改信息
    submit=(user)=>{
        let {setMsg}=this.props;
        UserApi.updateInfo(user)
            .then(res=>res.data.code==="200"?setMsg(""):setMsg("修改失败"))
    };

    render(){
        let {saveU,user,setU,msg}=this.props;
        return(
            <div className="personal">
                    <div className="list">
                        <li className="line">
                            <span className="name">昵称：</span>
                            {/*输入昵称*/}
                            <span className="detailed">
                                <input type="text" placeholder="2~8个汉字/4~16个字符" id={UserModel.userName} onChange={saveU}/>
                            </span>
                        </li>
                        <li className="line">
                            <span className="name">姓名：</span>
                            {/*真实姓名*/}
                            <span className="detailed">
                                <input type="text" placeholder="2~8个汉字/4~16个字符" id={UserModel.realName} onChange={saveU}/>
                            </span>
                        </li>
                        <li className="line">
                            <span className="name">性别:</span>
                            <span className="detailed">
                                <span>
                                   <div className={user.sex === 1 ? 'circle1A' : 'circle1B'} onClick={()=>{setU({sex:1})}}/>
                                   <span className="sex">男</span>
                                </span>
                                <span>
                                    <div className={user.sex === 0  ? 'circle2A' : 'circle2B'} onClick={()=>setU({sex:0})}/>
                                    <span className="sex">女</span>
                                </span>
                            </span>
                        </li>

                        {/*<li className="line">*/}
                        {/*    <span className="name">年龄: </span>*/}
                        {/*    <span className="detailed">*/}
                        {/*        <div className="choice">*/}
                        {/*            <li className="first">{user.age}<span className="iconfont">&#xe6a2;</span></li>*/}
                        {/*            <div className="second">*/}
                        {/*                <li>22岁</li>*/}
                        {/*                <li>24岁</li>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </span>*/}
                        {/*</li>*/}


                        <li className="line">
                            <span className="name">学号: </span>
                            {/*学号*/}
                            <span className="detailed">{user.number}</span>
                        </li>
                        <li className="line">
                            <span className="name">学校: </span>
                            <span className="detailed">{user.school}</span>
                        </li>
                        <li className="line">
                            <span className="name">专业: </span>
                            <span className="detailed">{user.major}</span>
                        </li>
                        <li className="line">
                            <span className="name">学历: </span>
                            <span className="detailed">
                                <div className="choice">

                                    {/*<li className="first">初中<span className="iconfont">&#xe6a2;</span></li>*/}
                                    {/*<div className="second">*/}
                                    {/*    <li>高中</li>*/}
                                    {/*    <li>大学</li>*/}
                                    {/*</div>*/}

                                    {/*选择学历*/}
                                    <select  value={user.level} onChange={this.changeLevel} >
                                        <option value="初中">初中</option>
                                        <option value="高中">高中</option>
                                        <option value="大学">大学</option>
                                    </select>
                                </div>
                            </span>
                        </li>
                        <li className="line">
                            <span className="name">手机: </span>
                            <span className="detailed">
                                <span>{user.phone}</span>
                            </span>
                        </li>
                        <li className="line">
                            <span className="name">邮箱: </span>
                            <span className="detailed">
                                <span>{user.email}</span>
                            </span>
                        </li>
                    </div>
                <span className="msgFailure">{msg}</span>

                    {/*提交信息*/}
                    <button onClick={()=>{this.submit(user)}}>保存</button>
            </div>
        )
     }
}

export default connect(ReduxMap.mapStateToProps,ReduxMap.mapDispatchToPropsU)(Personal)