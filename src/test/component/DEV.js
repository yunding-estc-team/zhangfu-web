import React from 'react';
import {connect} from "react-redux";
import ActionCreator from "../../utils/actionCreator";
import Test from "../testStore";
import Hello from "./hello";
class DEV extends React.Component{
    test=()=>{
        this.props.dispatch(ActionCreator.updateUser({name:"fasdf"}));
    };

    render(u) {
        const {user1,user}=this.props;
        console.log("this:"+this.props.user);
        console.log("store"+u+user);
        return(
            <div>
                <Hello/>
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
export default connect(mapStateToProps,mapDispatchToProps)(DEV)