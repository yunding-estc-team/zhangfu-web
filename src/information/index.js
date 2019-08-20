import React, { Component } from 'react';
import './index.css'
import {BrowserRouter as Router, Link, NavLink, Route,} from 'react-router-dom'
// import {NavLink, Route} from "react-router-dom";
import Personal from "./component/personal/personal";
import Attestation from "./component/attestation/attestation";
import Approve from "./component/approve/going/index";
import Approve1 from "./component/approve/over";
import img from "../images/wallhaven-dge9ll.png";
import  Call from "./component/name/index"
import Postbox from "./component/postbox";
import Phone from "./component/phone";
import Code from "./component/possword";
import Student from "./component/student";
import Safely from "./component/safety";
import Set from "../set";
import App from "../App";

// 用户个人资料
class Information extends Component{
    constructor(props) {
        super(props);
        this.state = {
            personal: true,
            approve: false,
            attestation:false
        };
        this.handlePersonal = this.handlePersonal.bind(this);
        this.handleApprove = this.handleApprove.bind(this);
        this.handleAttestation = this.handleAttestation.bind(this);
    }



    render(){
        return(
            <div className="information">
                <div className="left">
                    <div className="left-main">
                        <div className="item">账户设置</div>
                        <div className="main">
                            <div className="part1">
                                {/*头像*/}
                                <img src={img} alt=""/>
                                <p>修改头像</p>
                            </div>
                            <div className="part2">
                                {/*<NavLink to="/information/component/personal/personal"><div className="tag">个人资料</div></NavLink>*/}
                                {/*<NavLink to="/information/component/approve/going/index"><div className="tag">认证用户</div></NavLink>*/}
                                {/*<NavLink to="/information/component/attestation/attestation"><div className="tag">账户安全</div></NavLink>*/}
                                <div className="tag" onClick={this.handlePersonal}>个人资料</div>
                                <div className="tag" onClick={this.handleApprove}>认证用户</div>
                                <div className="tag" onClick={this.handleAttestation}>账户安全</div>
                            </div>
                        </div>
                    </div>
                </div>
                <Router>
                    <div className="right">
                        <Route path="/information/component/name/index" component={Call} />
                        <Route path="/information/component/postbox/index" component={Postbox} />
                        <Route path="/information/component/safety/index" component={Safely} />
                        <Route path="/information/component/phone/index" component={Phone} />
                        <Route path="/information/component/student/index" component={Student} />
                        <Route path="/information/component/possword/index" component={Code} />

                        {/*<Route path="/information/component/personal/personal" component={Personal} />*/}
                        {/*<Route path="/information/component/approve/going/index" component={Approve} />*/}
                        {/*<Route path="/information/component/attestation/attestation" component={Attestation} />*/}
                        <div className={this.state.personal === true ? '' : 'personal1'}><Personal/></div>
                        <div className={this.state.approve === true ? '' : 'approve1'}><Approve/></div>
                        {/*<div className={this.state.approve === true ? '' : 'approve1'}><Approve1/></div>*/}
                        <div className={this.state.attestation === true ? '' : 'attestation1'}><Attestation/></div>
                    </div>
                </Router>
            </div>
        )
     }
    handlePersonal(){
        if(this.state.personal === true)
            {
                return 0;
            }
        else
            {
                this.setState(
                    {
                        personal: !this.state.personal
                        }
                );
            if(this.state.approve === true)
                {
                    this.setState(
                         {
                             approve: !this.state.approve
                }
                );
                }
             else
                 {
                     this.setState(
                         {
                     attestation: !this.state. attestation
                 }
                 );
                 }
            }
    }
    handleApprove(){
        if(this.state.approve === true)
        {
            return 0;
        }
        else{
            this.setState(
                {
                    approve: !this.state.approve
                }
            );
            if(this.state.personal === true){
                this.setState(
                    {
                        personal: !this.state.personal
                    }
                );
            }
            else{
                this.setState(
                    {
                        attestation: !this.state. attestation
                    }
                );
            }
        }
    }
    handleAttestation(){
        if(this.state.attestation === true)
        {
            return 0;
        }
        else{
            this.setState(
                {
                    attestation: !this.state. attestation
                }
            );
            if(this.state.personal === true){
                this.setState(
                    {
                        personal: !this.state.personal
                    }
                );
            }else{
                this.setState(
                    {
                        approve: !this.state.approve
                    }
                );
            }
        }
    }

}

export default Information