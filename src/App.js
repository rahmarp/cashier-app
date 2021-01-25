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

const asyncMenuDetails = asyncComponent(() => {
  return import('./containers/ItemDetails/ItemDetails')
})
const asyncCart = asyncComponent(() => {
  return import('./containers/CartPage/CartPage')
})
const asyncOrder = asyncComponent(() => {
  return import('./containers/Order/Order')
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
          <Route path="/menu" exact component={asyncMenu} />
          <Route path="/menu/:id" exact component={asyncMenuDetails} />
          <Route path="/cart" exact component={asyncCart} />
          <Route path="/order" exact component={asyncOrder} />
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