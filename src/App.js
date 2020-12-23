import { Redirect, Route, Switch, withRouter } from 'react-router';
import './App.css';
// import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import RegistrationPage from './containers/RegistrationPage/RegistrationPage';
import asyncComponent from './hoc/asyncComponent/asyncComponent';

const asyncMenu = asyncComponent(() => {
  return import('./containers/MenuPage/MenuPage')
})
function App() {
  return (
    <div className="App">
      {/* <RegistrationPage /> */}
      <Switch>
        <Route path="/" exact component ={RegistrationPage} />
        <Route path="/menu" component={asyncMenu} />
        {/* <Redirect to="/" /> */}
      </Switch>
    </div>
  );
}

export default withRouter(App);
