import React, { Component } from 'react';
import './index.css'
import {UserModel} from "../../../config/model";
import api from "../../../config/url";

// 修改姓名

/**
 * @Data 2019年8月28日05点08分
 */
class Call extends Component{
    render(){
        let {submitU,saveU}=this.props;
        return(
            <div className="call">
                    <div className="call-name">修改姓名</div>
                    <div className="call-input"><input type="text" id={UserModel.realName} placeholder="必须为真实姓名" onChange={saveU}/></div>
                    <div className="call-button">
                        <button onClick={submitU(api.user.updatePrivateInfo).then(this.props.changeName)}>确认</button>
                        // todo 返回应有链接
                        <button className="return" onClick={this.props.changeName}>返回</button>
                    </div>
            </div>
        )
     }
}

export default Call