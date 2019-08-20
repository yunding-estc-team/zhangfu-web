import React, { Component } from 'react';
import './index.css'


class Student extends Component{
    render(){
        return(
            <div className="student">
                <div className="student-theme"><span>修改学生信息</span></div>
                <form action="">
                    <div className="student-school">
                        <span>学校：</span><span><input type="text" placeholder="例：太原理工大学"/></span>
                    </div>
                    <div className="student-major">
                        <span>专业：</span><span><input type="text" placeholder="例：软件工程"/></span>
                    </div>
                    <div className="student-number">
                        <span>学号：</span><span><input type="text" placeholder="例：2018005783"/></span>
                    </div>
                    <div className="student-button">
                        <button>确认</button>
                        <button className="return">返回</button>
                    </div>
                </form>
            </div>
        )
     }
}

export default Student