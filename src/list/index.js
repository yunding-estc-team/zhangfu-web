import React, { Component } from 'react';
import Classify from "./component/Classify/Classify";
import Main from "./component/main/main";
import './index.css'

// 排行榜页面
class List extends Component{
    render(){
        return(
            <div>
                <div className="lump">
                    <Classify/>
                    <Main/>
                </div>
            </div>
        )
     }
}

export default List