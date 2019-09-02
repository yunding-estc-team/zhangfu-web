import React, { Component } from 'react';
import './style.css'
import sp from "../../images/资源 1.png"
import {Link, Route} from "react-router-dom";
import Right1 from "./component/right1";
import Right2 from "./component/right2";
import UserApi from "../../config/userApi";
import ReduxMap from "../../utils/ReduxMap";
import {connect} from "react-redux";


// 公共头
class Header extends Component{
    instanceSearch=(e)=>{
        let {saveS,search}=this.props;
        saveS(e);
        UserApi.search(search)
            .then(res=>{res.data.data.map(c=>c.name)})
    };
    render(){
        let {search}=this.props;
        return(
            <div>
                <div className="section0">
                    <div className="header">
                        <div className="header-left">
                            {/*logo*/}
                            <span className="logo"><Link to="/home/index"><img src={sp} alt=""/></Link></span>
                            <span><Link to="/list/index">排行榜</Link></span>
                        </div>
                        <div className="search">
                            {/*<form action="">*/}
                                <input type="text" id="name" onChange={this.instanceSearch}/>
                                <Link to={{
                                    // todo 没有搜索结果页面
                                    pathname:"",
                                    state:{search},
                                }}><button> <span className="iconfont">&#xe74b;</span>搜索</button></Link>
                            {/*</form>*/}
                        </div>
                        <div>
                            {localStorage.getItem("token")!==null?<Right2/>:
                                    <span className="right1">
                                        <Link to="/register/index">注册</Link>
                                        <Link to="/login/index">/登录</Link>
                                    </span>}
                        </div>
                    </div>
                </div>
            </div>
        )
     }
}

export default connect(ReduxMap.mapStateToProps,ReduxMap.mapDispatchToPropsS)(Header)