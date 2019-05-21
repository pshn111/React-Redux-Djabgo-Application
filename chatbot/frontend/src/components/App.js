import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Header from './layout/Header';
import Home from './layout/Home';

import { Provider } from 'react-redux'
import store from '../store'

class App extends Component {
    render() {
        <Provider>
            return (
                <Fragment>
                    <Header />
                    <div className="container">
                        <Home />
                    </div>
                </Fragment>
            );
        </Provider>
    }
}

ReactDOM.render(<App />, document.getElementById('app'));