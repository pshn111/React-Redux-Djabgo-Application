import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


export class Alerts extends Component {
    static propTypes = {
        error: PropTypes.object.isRequired
    };

    componentDidUpdate(prevProps) {
        const {error, alert} = this.props;
        if (error !== prevProps.error) {
            if (error.msg.user_name) alert.error(`Name: ${error.msg.user_name.join()}`);
            if (error.msg.email) alert.error(`Email: ${error.msg.email.join()}`);
            if (error.msg.password) alert.error(`Password: ${error.msg.password.join()}`);
        }
    }

    render() {
        return <Fragment />;
    }
}
const mapStateToProps = state => ({
    error: state.errors
})

//export default withAlert()(Alerts);
export default connect(mapStateToProps)(withAlert()(Alerts));
