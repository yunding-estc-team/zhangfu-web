import React from 'react';
import {connect} from "react-redux";
import ActionCreator from "../../utils/actionCreator";
import Test from "../testStore";
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
            <Test/>
            </div>
        )
    }
}
const mapStateToProps=(state,ownProps)=>{
    console.log(ownProps);
    console.log("state"+state);
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