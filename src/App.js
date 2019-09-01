import React, { Component } from 'react';
import Header from "./common/header";
import Footer from "./common/fooder";
import List from "./list";
import {Link, Route} from "react-router-dom";
import Information from "./information/index";
import Login from "./login/index";
import Register from "./register/index";
import Personage1 from "./center/component/personage/me"
import Home from "./home";
import Message from "./message";
import Area from "./area";
import Set from "./set";
import Personage2 from "./center/component/personage/you"
import Organizer1 from "./center/component/organizer/me";
import Organizer2 from "./center/component/organizer/you";
import Datum from "./datum";
import DEV from "./test/component/DEV";


class App extends Component{
    render(){
        return(
            <div>
                <Header/>
                    <div>
                        {/*<li><Link to="/center/personage/you/index">个人中心</Link></li>*/}
                        <li><Link to="/center/personage/me/index">个人中心</Link></li>
                        {/*<li><Link to="/center/organizer/you/index">个人中心</Link></li>*/}
                        {/*<li><Link to="/center/organizer/me/index">个人中心</Link></li>*/}
                        {/*<li><Link to="/message/index">消息盒子</Link></li>*/}
                        {/*<li><Link to="/area/index">赛事详情</Link></li>*/}
                    </div>
                    <Route path="/set/index" component={Set} />
                    <Route path="/message/index" component={Message} />
                    <Route path="/home/index" component={Home}/>
                    <Route path="/register/index" component={Register}/>
                    <Route path="/login/index" component={Login}/>
                    <Route path="/information/index" component={Information}/>
                    <Route path="/datum/index" component={Datum}/>
                    <Route path="/list/index" component={List}/>
                    <Route path="/center/personage/me/index" component={Personage1}/>
                    <Route path="/center/personage/you/index" component={Personage2}/>
                    <Route path="/center/organizer/me/index" component={Organizer1}/>
                    <Route path="/center/organizer/you/index" component={Organizer2}/>
                    <Route path="/area/index" component={Area}/>
                    <Route path="/test" component={DEV}/>
                <Footer/>
            </div>
        )
     }
}

export default App