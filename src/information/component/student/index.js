import React, { Component } from 'react';
import './index.css'
import {UserModel} from "../../../config/model";
import api from "../../../config/url";

/**
 * @Data 2019年8月28日09点40分
 */
class Student extends Component{
    render(){
        let {saveU,submitU}=this.props;
        return(
            <div className="student">
                <div className="student-theme"><span>修改学生信息</span></div>
                <form action="">
                    <div className="student-school">
                        <span>学校：</span><span><input type="text" placeholder="例：太原理工大学" id={UserModel.school} onChange={saveU}/></span>
                    </div>
                    <div className="student-major">
                        <span>专业：</span><span><input type="text" placeholder="例：软件工程" id={UserModel.major} onChange={saveU}/></span>
                    </div>
                    <div className="student-number">
                        <span>学号：</span><span><input type="text" placeholder="例：2018005783" id={UserModel.number} onChange={saveU}/></span>
                    </div>
                    <div className="student-button">
                        <button onClick={submitU(api.user.updatePrivateInfo)}>确认</button>
                        // todo 没有返回链接
                        <button className="return">返回</button>
                    </div>
                </form>
            </div>
        )
     }
}

export default Student