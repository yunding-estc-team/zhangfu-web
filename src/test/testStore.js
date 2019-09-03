import React from 'react'
import {connect} from "react-redux/es/alternate-renderers";
import DEV from "./component/DEV";
import ActionCreator from "../store/actionCreator";
import ReduxMap from "../store/ReduxMap";
import {instance,api }from '../config/url'
    function Test({user,onClick,onChange,getU,sendCode}){
        // console.log(user);
        console.log(user);
        let data =()=>{
            instance.post(api.user.sendCode,{userName:"19834522726"})
                .then(res=>{
                    console.log(res.data.code);
                })
        }
        return (
            <div>
                {user.name}{user.id}
                <button onClick={data}>dispatch</button>
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




export default connect(mapStateToProps,ReduxMap.mapDispatchToPropsU)(Test);
// export default Test;