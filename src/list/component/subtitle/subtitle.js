import React, { Component } from 'react';
import './subtitle.css'

// 大分类
class Subtitle extends Component{
    constructor(props){
        super(props);
        this.state={
            composite:true,
            host:false,
            new:false,
        }
    }
    handleComposite(){
        if(this.state.composite === true){
            return 0
        }
        else{
         if(this.state.host===true){
             this.setState(
                 {
                     host:!this.state.host,
                     composite:!this.state.composite,
                 }
             )
         }
         else{
             this.setState(
                 {
                     composite:!this.state.composite,
                     new:!this.state.new,
                 }
             )
         }
        }
    }
    handleHost(){
        if(this.state.host === true){
            return 0
        }
        else{
            if(this.state.composite===true){
                this.setState(
                    {
                        host:!this.state.host,
                        composite:!this.state.composite,
                    }
                )
            }
            else{
                this.setState(
                    {
                        host:!this.state.host,
                        new:!this.state.new,
                    }
                )
            }
        }
    }

    handleNew(){
        if(this.state.new === true){
            return 0
        }
        else{
            if(this.state.host===true){
                this.setState(
                    {
                        host:!this.state.host,
                        new:!this.state.new,
                    }
                )
            }
            else{
                this.setState(
                    {
                        composite:!this.state.composite,
                        new:!this.state.new,
                    }
                )
            }
        }
    }
    render(){
        return(
            <div>
                <div className="subtitle">
                    <span className={this.state.composite===true ? 'composite1' : 'composite2'} onClick={this.handleComposite.bind(this)}>综合</span>
                    <span className={this.state.host===true ? 'host1' : 'host2'} onClick={this.handleHost.bind(this)}>最热</span>
                    <span className={this.state.new===true ? 'new1' : 'new2'} onClick={this.handleNew.bind(this)}>最新</span>
                </div>
            </div>
        )
     }
}

export default Subtitle