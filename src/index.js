import React from 'react';
import './index.css'
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import {createStore} from "redux";
import reducer from "./store/reducer";
import Provider from "react-redux/es/components/Provider";


const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
ReactDOM.render(
    <Provider store={store}>
        <Router>
        <App/>
    </Router>
    </Provider>
    , document.getElementById('root'));
