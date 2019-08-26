import React, { Component } from 'react';
import './index.css';
import axios from 'axios';
import api ,{instance}from "../../../../config/url";




// 回复框
class Box extends Component{
    constructor(props){
        super(props);
        this.state = {
            content:"",
            competitionWikiId:this.props.id,
            mag:""
        }
    }


    render(){
        return(
            <div className="box">
                <div className="box-circle"><span>答</span></div>
                <div className="box-answer"><input type="text" placeholder="我要认真回答问题了"  onChange={this.inputChange.bind(this)}/></div>
                <div className="box-button"><button onClick={this.handleClick.bind(this)}>确认</button></div>
                <span className="mag">{this.state.msg}</span>
            </div>
        )
     }
    handleClick = (event) =>{
        console.log(this.state.content);
        instance.post(api.competitionWiki.userAnswer,
            {
                competitionWikiId:this.state.competitionWikiId,
                content:this.state.content
            }
        ).then(
            res =>{
                if(res.data.code==="200"){
                    // todo success
                    this.setState({mag:""})
                }else{
                    // todo failure
                    this.setState({mag:"回复失败！！!"})
                }

            }
        )
    };
    inputChange(e){
        let inputValue = e.target.value;
        this.setState({
            content: inputValue
        })
    }

}

export default Box