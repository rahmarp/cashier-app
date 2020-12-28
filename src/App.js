import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch, withRouter } from 'react-router';
import './App.css';
// import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import RegistrationPage from './containers/RegistrationPage/RegistrationPage';
import asyncComponent from './hoc/asyncComponent/asyncComponent';
import "@fontsource/roboto"

const asyncMenu = asyncComponent(() => {
  return import('./containers/MenuPage/MenuPage')
})
class App extends Component {
  render(){
    let routes = (
      <Switch>
        <Route path="/" exact component ={RegistrationPage} />
        <Redirect to="/" />
      </Switch>
    )

    if (this.props.isRegistered) {
      routes = (
        <Switch>
          <Route path="/" exact component ={RegistrationPage} />
          <Route path="/menu" component={asyncMenu} />
          <Redirect to="/" />
        </Switch>
      )
    }
    return (
    <div className="App">
      {routes}      
    </div>
  );
  }
}

const mapStateToProps = state => {
  return {
    isRegistered: state.user.users !== ''
  }
}

export default withRouter(connect(mapStateToProps)(App));
