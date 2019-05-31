import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'


const PrivateRoute = ({ component: Component, auth, ...res }) => (
    <Route 
        {...res}
        render={props => {
            if (auth.isLoading){
                return <h2>Loading...</h2>
            } else if(!auth.isAuthenticated) {
                return <Redirect to="/login" />
            } else {
                return <Comment {...props} />
            }
        }}
    />

);

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);