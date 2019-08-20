import React, { Component } from 'react';
import './index.css'

// 添加更多
class More extends Component{
    render(){
        return(
            <div className="mores">
                <div><input type="text"/></div>
                <div><textarea name="" id="" cols="30" rows="10"/></div>
            </div>
        )
     }
}

export default More