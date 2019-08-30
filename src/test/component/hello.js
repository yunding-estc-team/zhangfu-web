import React from 'react'
import "../../common/Extra/msg.css"
export default class Hello  extends React.Component{
    handleClick=()=>{
        console.log("1234324")
    };
    render() {
        return(
            <div>
                <h1 className="msgFailure" onClick={this.handleClick}>Hello world!!</h1>
            </div>
        )
    }
}