import React, { Component } from 'react';
import './personal.css'
import {UserModel} from "../../../config/model";
import api from "../../../config/url";
// 修改个人资料
/**
 * @Data 2019年8月28日05点09分
 */
class Personal extends Component{
    constructor(props){
        super(props);
        this.state={
            circle1:true,
            circle2:false,
        };

    }
    handleOrganization(){
       // todo 设置性别
        if(this.state.circle1===true){
            return 0
        }
        else{
            this.setState(
                {
                    circle1:!this.state.circle1,
                    circle2:!this.state.circle2,
                }
            )
        }
    }
    handleParticipant(){
        // todo 设置性别
        if(this.state.circle2===true){
            return 0
        }
        else{
            this.setState(
                {
                    circle1:!this.state.circle1,
                    circle2:!this.state.circle2,
                }
            )
        }
    }

    render(){
        let {saveU,user,setU,submitU}=this.props;
        return(
            <div className="personal">
                <form action="">
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
                            // todo 这里css改动
                            <input className="detailed" id={UserModel.realName} onChange={saveU}/>
                        </li>
                        <li className="line">
                            <span className="name">性别:</span>
                            <span className="detailed">
                                <span>
                                   <div className={this.state.circle1 === true ? 'circle1A' : 'circle1B'} onClick={this.handleOrganization.bind(this)}/>
                                   <span className="sex">男</span>
                                </span>
                                <span>
                                    <div className={this.state.circle2 === true ? 'circle2A' : 'circle2B'} onClick={this.handleParticipant.bind(this)}/>
                                    <span className="sex">女</span>
                                </span>
                            </span>
                        </li>

                        // todo 看不懂
                        <li className="line">
                            <span className="name">年龄: </span>
                            <span className="detailed">
                                <div className="choice">
                                    <li className="first">21岁 <span className="iconfont">&#xe6a2;</span></li>
                                    <div className="second">
                                        <li>22岁</li>
                                        <li>24岁</li>
                                    </div>
                                </div>
                            </span>
                        </li>

                        // todo 看不懂，一下信息是否需要更改
                        <li className="line">
                            <span className="name">学号: </span>
                            {/*学号*/}
                            <span className="detailed">2017007878</span>
                        </li>
                        <li className="line">
                            <span className="name">学校: </span>
                            <span className="detailed">太原理工大学</span>
                        </li>
                        <li className="line">
                            <span className="name">专业: </span>
                            <span className="detailed">软件工程</span>
                        </li>
                        <li className="line">
                            <span className="name">学历: </span>
                            <span className="detailed">
                                <div className="choice">

                                    // todo 看不懂，是不是要做select标签？
                                    <li className="first">初中 <span className="iconfont">&#xe6a2;</span></li>
                                    <div className="second">
                                        <li>高中</li>
                                        <li>大学</li>
                                    </div>
                                </div>
                            </span>
                        </li>
                        <li className="line">
                            <span className="name">手机: </span>
                            <span className="detailed">
                                <span>18763567272</span>
                            </span>
                        </li>
                        <li className="line">
                            <span className="name">邮箱: </span>
                            <span className="detailed">
                                <span>245699916@qq.com</span>
                            </span>
                        </li>
                    </div>
                    <button onClick={()=>submitU(api.user.updateInfo)}>保存</button>
                </form>
            </div>
        )
     }
}

export default Personal