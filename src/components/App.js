import React from 'react';
import agent from '../agent';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import Article from './Article';
import Home from './Home';
import Header from './Header';
import Editor from './Editor';
import Login from './Login';
import Register from './Register';
import Settings from './Settings';
import Profile from './Profile';
import ProfileFavorites from './ProfileFavorites';


const mapStateToProps = state => ({
  appLoaded: state.common.appLoaded,
  appName: state.common.appName,
  currentUser: state.common.currentUser,
  redirectTo: state.common.redirectTo
});

const mapDispatchToProps = dispatch => ({
  onLoad: (payload, token) =>
    dispatch({ type: 'APP_LOAD', payload, token }),
  onRedirect: () =>
    dispatch({ type: 'REDIRECT' })
});

class App extends React.Component {
  componentWillMount() {
    const token = window.localStorage.getItem('jwt');
    if (token) {
      agent.setToken(token);
    }

    this.props.onLoad(token ? agent.Auth.current() : null, token);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.redirectTo) {
      this.context.router.replace(nextProps.redirectTo);
      this.props.onRedirect();
    }
  }

  render() {
    if (this.props.appLoaded){
      return (
        <div>
          <Header
            currentUser={this.props.currentUser}
            appName={this.props.appName} />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/editor/:slug" component={Editor} />
            <Route path="/editor" component={Editor} />
            <Route path="/article/:id" component={Article} />
            <Route path="/settings" component={Settings} />
            <Route path="/@:username/favorites" component={ProfileFavorites} />
            <Route path="/@:username" component={Profile} />
          </Switch>
          {this.props.children}
        </div>
      );
    } else {
      return (
        <div>
          <Header
            currentUser={this.props.currentUser}
            appName={this.props.appName} />
            
        </div>
      );
    }
  }
}

App.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
