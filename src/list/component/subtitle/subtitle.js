import React, { Component } from 'react';
import './subtitle.css'

// 大分类
class Subtitle extends Component{
    render(){
        return(
            <div>
                <div className="subtitle">
                    <span>综合</span>
                    <span>最热</span>
                    <span>最新</span>
                </div>
            </div>
        )
     }
}

export default Subtitle