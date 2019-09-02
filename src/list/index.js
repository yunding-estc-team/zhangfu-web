import React, { Component } from 'react';
import Classify from "./component/Classify/Classify";
import Main from "./component/main/main";
import './index.css'
import CompetitionApi from "../config/competitionApi";
import ReduxMap from "../utils/ReduxMap";
import {connect} from "react-redux";

// 排行榜页面
class List extends Component{


    // 加载时获取数据
    componentDidMount() {
        let {setCL}=this.props;
        CompetitionApi.home("new",1,6)
            .then(res=>{
                setCL(res.data.data);
            })
    };

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

export default connect(ReduxMap.mapStateToProps,ReduxMap.mapDispatchToPropsC)(List)