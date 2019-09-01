import React, { Component } from 'react';
import './index.css';
import Personal from "./component/personal/personal";
import Attestation from "./component/attestation/attestation";
import Approve from "./component/approve/going/index";
import Approve1 from "./component/approve/over";
import img from "../images/wallhaven-dge9ll.png";

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
                                <div className="tag" onClick={this.handlePersonal}>个人资料</div>
                                <div className="tag" onClick={this.handleApprove}>认证用户</div>
                                <div className="tag" onClick={this.handleAttestation}>账户安全</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className={this.state.personal === true ? '' : 'personal1'}><Personal/></div>
                    <div className={this.state.approve === true ? '' : 'approve1'}><Approve/></div>
                    <div className={this.state.attestation === true ? '' : 'attestation1'}><Attestation/></div>
                    {/*<div className={this.state.approve === true ? '' : 'approve1'}><Approve1/></div>*/}
                </div>
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