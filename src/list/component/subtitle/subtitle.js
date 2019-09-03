import React, { Component } from 'react';
import './subtitle.css'
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import ReduxMap from "../../../store/ReduxMap";
import {connect} from "react-redux";
import CompetitionApi from "../../../config/competitionApi";

// 大分类
class Subtitle extends Component{
    constructor(props){
        super(props);
        this.state={
            hot:true,
            new:false,
        }
    }

    handleHot(){
        let {setCL}=this.props;
        this.setState({hot:true,new:false});
        CompetitionApi.home("hot",1,6)
            .then(res=>{
                setCL(res.data.data);
            })
    }

    handleNew(){
        let {setCL}=this.props;
        this.setState({hot:false,new:true});
        CompetitionApi.home("new",1,6)
            .then(res=>{
                setCL(res.data.data);
            })
    }


    render(){
        return(
            <div>
                <div className="subtitle">
                    {/*<span className={this.state.composite===true ? 'composite1' : 'composite2'} onClick={this.handleComposite.bind(this)}>综合</span>*/}
                    {/*<span className={this.state.host===true ? 'host1' : 'host2'} onClick={this.handleHost.bind(this)}>最热</span>*/}
                    <span className={this.state.hot?"active":"inActive"} onClick={this.handleHot.bind(this)}>最热</span>
                    {/*<span className={this.state.new===true ? 'new1' : 'new2'} onClick={this.handleNew.bind(this)}>最新</span>*/}
                    <span className={this.state.new?"active":"inActive"} onClick={this.handleNew.bind(this)}>最新</span>
                </div>
            </div>
        )
     }
}

export default connect(ReduxMap.mapStateToProps,ReduxMap.mapDispatchToPropsC)(Subtitle)