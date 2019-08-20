import React, { Component } from 'react';
import './index.css'
import img from "../images/wallhaven-dge9ll.png";
import Material from "./component/material";
import Authentication from "./component/authentication";
import Contest from "./component/contest";


// 举办方个人资料
class Datum extends Component{

    constructor(props) {
        super(props);
        this.state = {
            material: true,
            authentication: false,
            contest:false
        };
        this.handleMaterial = this.handleMaterial.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.handleContest = this.handleContest.bind(this);
    }


    render(){
        return(
            <div>
                <div className="datum">
                    <div className="left">
                        <div className="left-main">
                            <div className="item">账户设置</div>
                            <div className="main">
                                <div className="part1">
                                    {/*头像*/}
                                    <img src={img} alt=""/>
                                    {/*名称*/}
                                    <p>天一科技公司</p>
                                </div>
                                <div className="part2">
                                    <div className="tag" onClick={this.handleMaterial}>举办方信息</div>
                                    <div className="tag" onClick={this.handleAuthentication}>认证举办方</div>
                                    <div className="tag" onClick={this.handleContest}>发布的赛事</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className={this.state.material === true ? '' : 'material1'}><Material/></div>
                        <div className={this.state.authentication === true ? '' : 'authentication1'}><Authentication/></div>
                        <div className={this.state.contest === true ? '' : 'contest1'}><Contest/></div>
                    </div>
                </div>
            </div>
        )
     }


    handleMaterial(){
        if(this.state.material === true)
        {
            return 0;
        }
        else
        {
            this.setState(
                {
                   material: !this.state.material
                }
            );
            if(this.state.authentication === true)
            {
                this.setState(
                    {
                        authentication: !this.state.authentication
                    }
                );
            }
            else
            {
                this.setState(
                    {
                        contest: !this.state. contest
                    }
                );
            }
        }
    }
    handleAuthentication(){
        if(this.state.authentication === true)
        {
            return 0;
        }
        else{
            this.setState(
                {
                    authentication: !this.state.authentication
                }
            );
            if(this.state.material === true){
                this.setState(
                    {
                        material: !this.state.material
                    }
                );
            }
            else{
                this.setState(
                    {
                        contest: !this.state. contest
                    }
                );
            }
        }
    }
    handleContest(){
        if(this.state.contest === true)
        {
            return 0;
        }
        else{
            this.setState(
                {
                    contest: !this.state. contest
                }
            );
            if(this.state.material === true){
                this.setState(
                    {
                        material: !this.state.material
                    }
                );
            }else{
                this.setState(
                    {
                        authentication: !this.state.authentication
                    }
                );
            }
        }
    }




}

export default Datum