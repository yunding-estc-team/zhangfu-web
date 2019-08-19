import React, { Component } from 'react';
import Subtitle from "../subtitle/subtitle";
import Part from "../part/part";
import Pag from "../pag/pag";
import './main.css'


// 赛事
class Main extends Component{
    render(){
        return(
            <div className="import">
                <Subtitle/>
                <Part/>
                <Pag/>
            </div>
        )
     }
}

export default Main