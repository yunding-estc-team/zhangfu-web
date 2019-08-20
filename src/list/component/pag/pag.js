import React, { Component } from 'react';
import './pag.css'


// 分页
class Pag extends Component{
    render(){
        return(
            <div>
                <div className="pag">
                    <button>首页</button>
                    <button className="number"><span className="iconfont">&#xe606;</span> </button>
                    <button className="number"> 1 </button>
                    <button className="number"> 2 </button>
                    <button className="number"> 3 </button>
                    <button className="number"><span className="iconfont">&#xe503;</span> </button>
                    <button>结尾</button>
                </div>
            </div>
        )
     }
}

export default Pag