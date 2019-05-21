import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addUser } from '../../actions/user'

export class AddUser extends Component {
    state = {
        user_name: '',
        email: '',
        password: ''
    }

    static propTypes = {
        addUser: PropTypes.func.isRequired
      }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const {user_name, email, password} = this.state;
        const user = {user_name, email, password};
        this.props.addUser(user);
    };

  render() {
      const {user_name, email, password} = this.state;
    return (
        <div className="card card-body mt-5 mb-4">
        <h2>Add User</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              name="user_name"
              onChange={this.onChange}
              value={user_name}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              onChange={this.onChange}
              value={email}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              className="form-control"
              type="password"
              name="password"
              onChange={this.onChange}
              value={password}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default connect(null, { addUser })(AddUser);