import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import Header from './layout/Header';
import Home from './layout/Home';
import Add from './layout/AddUser';
import Alerts from './layout/Alerts';

import { Provider } from 'react-redux';
import store from '../store';


//
const alertOptions = {
    timeout: 3000,
    position: "middle"
}

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    <Router>
                        <Fragment>
                            <Header />
                            
                            <div className="container">
                                <Alerts />
                                <Switch>
                                    <Route exact path="/" Component={Home} />
                                </Switch>
                                {/* <Add />
                                <Home /> */}
                            </div>
                        </Fragment>
                    </Router>
                </AlertProvider>    
            </Provider>
        );      
    }
}

ReactDOM.render(<App />, document.getElementById('app'));