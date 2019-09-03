import React, { Component } from 'react';
import './apply.css'
import ReduxMap from "../../../store/ReduxMap";
import {connect} from "react-redux";

// 报名
class Apply extends Component{

    handleClickLink=(e)=>{
        window.location.href=e.nativeEvent.target.id;
    };
    render(){
        let {joinLink}=this.props;
        return(
            <div>
                <div className="apply">
                    <p className="sign">报名</p>
                    <p className="number"> <span className="iconfont" id={joinLink} onClick={this.handleClickLink} >&#xe618;</span></p>
                </div>
            </div>
        )
     }
}

export default connect(ReduxMap.mapStateToProps,ReduxMap.mapDispatchToPropsC)(Apply);