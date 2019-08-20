import React, {Component} from 'react';
import './index.css'
import Input1 from "./input/input1";
import Input2 from "./input/input2";
import img0 from '../images/undraw_solution_mindset_34bi.png'
import {BrowserRouter as Router, NavLink, Route} from "react-router-dom";
import Loging from "./component/login";
import Find from "./component/find";
import Set from "../set";

// 登录

class Login extends Component {
    render() {
        return (
            <div className="login">
                <div className="left">
                    <img src={img0} alt=""/>
                </div>
                <Router>
                    <div>
                        {/*<Route path="/login/index" component={Loging} />*/}
                        <Loging/>
                        {/*<Route path="/login/index" component={Find} />*/}
                        {/*<Find/>*/}
                    </div>
                </Router>
            </div>
        )
    }
}

export default Login