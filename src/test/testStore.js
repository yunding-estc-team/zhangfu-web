import React from 'react'
import {connect} from "react-redux/es/alternate-renderers";
import DEV from "./component/DEV";
import ActionCreator from "../utils/actionCreator";
    function Test({user,onClick,onChange,getU}){
        // console.log(user);
        console.log(user);
        return (
            <div>
                {user.name}{user.id}
                <button onClick={getU}>dispatch</button>
                <input onChange={onChange} placeholder={"change"}/>
            </div>
        )
    }
    const mapStateToProps=(state,ownProps)=>{
        console.log("state:"+state);
        console.log(ownProps);
        return {
            user:state.user,
            competition:state.competition,
        }
    };

    const mapDispatchToProps=(dispatch,ownProps)=>{
        return {
            onClick:()=>{
                dispatch(ActionCreator.updateUser({name:"xiaoming",id:"234567"}));
            },
            onChange:(e)=>{
              dispatch(ActionCreator.updateUser({name:e.target.value}))
            }
        }
    };




export default connect(mapStateToProps,mapDispatchToProps)(Test);
// export default Test;