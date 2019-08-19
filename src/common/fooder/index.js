import React, { Component } from 'react';
import './style.css'





// 公共底部
class Footer extends React.Component{
    render(){
        return(
            <div>
                <div className="section1">
                    <div className="footer">
                        <div>
                            <p>赛谱</p>
                            <p>关于我们</p>
                        </div>
                        <div className="middle">
                            <p>传送门</p>
                            <p>
                                <span>云顶书院官网</span>
                                <span className="right">云顶电商</span>
                            </p>
                        </div>
                        <div>
                            <p>
                                {/*新浪*/}
                                <span className="circle"><span className="iconfont">&#xe730;</span></span>
                                {/*QQ*/}
                                <span className="circle"><span className="iconfont">&#xe656;</span></span>
                                {/*知乎*/}
                                <span className="circle"><span className="iconfont">&#xe501;</span></span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
     }
}

export default Footer