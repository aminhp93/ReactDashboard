import { Link } from 'react-router-dom';
import ListErrors from './ListErrors';
import React from 'react';
import agent from '../agent';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
	...state.auth
})

const mapDispatchToProps = dispatch => ({
	onChangeEmail: value => dispatch({
		type: 'UPDATE_FIELD_AUTH', key: 'email', value
	}),
	onChangePassword: value => dispatch({ 
		type: 'UPDATE_FIELD_AUTH', key: 'password', value
	}),
	onChangeUsername: value => dispatch({
 		type: 'UPDATE_FIELD_AUTH', key: 'username', value
	}),
	onSubmit: (username, email, password) => dispatch({ 
		type: 'REGISTER', payload: agent.Auth.register(username, email, password)
	})
})

class Register extends React.Component{
	constructor(){
		super();
		this.changeEmail = event => this.props.onChangeEmail(event.target.value);
		this.changePassword = event => this.props.onChangePassword(event.target.value);
		this.changeUsername = event => this.props.onChangeUsername(event.target.value);
		this.submitForm = (username, email, password) => event => {
			event.preventDefault();
			this.props.onSubmit(username, email, password);
		}
	}

	render(){
		const email = this.props.email;
		const password = this.props.password;
		const username = this.props.username;

		return (
			<div className="auth-page">
		        <div className="container page">
		          <div className="row">

		            <div className="col-md-6 offset-md-3 col-xs-12">
		              <h1 className="text-xs-center">Sign Up</h1>
		              <p className="text-xs-center">
		                <Link to="login">
		                  Have an account?
		                </Link>
		              </p>

		              <ListErrors errors={this.props.errors} />

		              <form onSubmit={this.submitForm(username, email, password)}>
		                <fieldset>

		                  <fieldset className="form-group">
		                    <input
		                      className="form-control form-control-lg"
		                      type="text"
		                      placeholder="Username"
		                      value={this.props.username}
		                      onChange={this.changeUsername} />
		                  </fieldset>

		                  <fieldset className="form-group">
		                    <input
		                      className="form-control form-control-lg"
		                      type="email"
		                      placeholder="Email"
		                      value={this.props.email}
		                      onChange={this.changeEmail} />
		                  </fieldset>

		                  <fieldset className="form-group">
		                    <input
		                      className="form-control form-control-lg"
		                      type="password"
		                      placeholder="Password"
		                      value={this.props.password}
		                      onChange={this.changePassword} />
		                  </fieldset>

		                  <button
		                    className="btn btn-lg btn-primary pull-xs-right"
		                    type="submit"
		                    disabled={this.props.inProgress}>
		                    Sign in
		                  </button>

		                </fieldset>
		              </form>
		            </div>

		          </div>
		        </div>
		      </div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
