import React from 'react';
import {connect} from "react-redux";
import ActionCreator from "../../store/actionCreator";
import Test from "../testStore";
import Hello from "./hello";
import {withRouter} from "react-router-dom";
class DEV extends React.Component{
    test=()=>{
        this.props.dispatch(ActionCreator.updateUser({name:"fasdf"}));
    };

    forward=()=>{
        this.props.history.push("/home/index")
    };

    getClassName=(e)=>{
        console.log(e.nativeEvent.target.className);
    };

    getValue=(e)=>{
        console.log(e.nativeEvent.target.text);
    }
    render(u) {
        const {onClick,user}=this.props;
        console.log("this:"+this.props.user);
        console.log("store"+u+user);
        return(
            <div>
                <Hello/>
                <button onClick={onClick}>dispatch</button>
                <button  onClick={this.forward}>forward</button>
                <button className={"css"} onClick={this.getClassName}>forward</button>
                <button onClick={this.getValue} value={2}>3</button>
            </div>
        )
    }
}
const mapStateToProps=(state,ownProps)=>{
    return{
        user:state,
    }
};
const mapDispatchToProps=(dispatch,ownProps)=>{
    return {
        onClick:()=>dispatch(ActionCreator.updateUser({name: "noname"}))
    }
    };
const dev = connect(mapStateToProps,mapDispatchToProps)(DEV);
export default withRouter(dev);