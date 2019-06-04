import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import messages from '../../reducers/messages';


export class Alerts extends Component {
    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired
    };

    componentDidUpdate(prevProps) {
        const {error, alert, message} = this.props;
        if (error !== prevProps.error) {
            if (error.msg.user_name) alert.error(`Name: ${error.msg.user_name.join()}`);
            if (error.msg.email) alert.error(`Email: ${error.msg.email.join()}`);
            if (error.msg.password) alert.error(`Password: ${error.msg.password.join()}`);
            if (error.msg.non_field_errors) alert.error(error.msg.non_field_errors.join());
            if (error.msg.username) alert.error(error.msg.username.join());

        }

        if (message !== prevProps.message) {
            if (message.deleteUser) alert.success(message.deleteUser);
            if (message.addUser) alert.success(message.addUser);
            if (message.passwordNotMatch) alert.error(message.passwordNotMatch);
           
        }
    }

    render() {
        return <Fragment />;
    }
}
const mapStateToProps = state => ({
    error: state.errors,
    message: state.messages
})

//export default withAlert()(Alerts);
export default connect(mapStateToProps)(withAlert()(Alerts));
