import React, { Component } from 'react';
import './pag.css'
import {connect} from "react-redux";
import ReduxMap from "../../../store/ReduxMap";
import CompetitionApi from "../../../config/competitionApi";


// 分页
class Pag extends Component{

    handleTurnToPage=(e)=>{
        let turnTo = e.nativeEvent.target.value;
        let {setCL,setCurrent}=this.props;
        console.log(turnTo);
        setCurrent(turnTo);
        CompetitionApi.home("new",turnTo,6)
            .then(res=>{
                setCL(res.data.data);
            })
    };

    render(){
        let {current}=this.props;
        return(
            <div>
                <div className="pag">
                    <button value={1} onClick={this.handleTurnToPage}>首页</button>
                    <button className="number"><span className="iconfont">&#xe606;</span> </button>
                    <button className="number" value={current==="1"?current:parseInt(current)-1} onClick={this.handleTurnToPage}> {current===1?current:parseInt(current)-1} </button>
                    <button className="number" value={current==="1"?current+1:current} onClick={this.handleTurnToPage}> {current===1?current+1:current} </button>
                    <button className="number" value={current==="1"?current+2:parseInt(current)+1} onClick={this.handleTurnToPage}> {current===1?current+2:parseInt(current)+1}</button>
                    <button className="number"><span className="iconfont">&#xe503;</span> </button>
                    <button value={-1} onClick={this.handleTurnToPage}>结尾</button>
                </div>
            </div>
        )
     }
}

export default connect(ReduxMap.mapStateToProps,ReduxMap.mapDispatchToPropsC)(Pag)