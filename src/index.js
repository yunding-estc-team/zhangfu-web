import React from 'react';
import './index.css'
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Link , Route , } from 'react-router-dom'
import {createStore} from "redux";
import reducer from "./utils/reducer";
import Provider from "react-redux/es/components/Provider";


const store = createStore(reducer);
ReactDOM.render(
    <Provider store={store}>
        <Router>
        <App/>
    </Router>
    </Provider>
    , document.getElementById('root'));
