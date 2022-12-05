import React from 'react';
import './App.css';
import LoginPage from './Login Page/LoginPage';
// import { Route,Switch } from 'react-router-dom';
// import LoginPage from './Login Page/LoginPage';
// import HeaderArea from './HeaderArea/HeaderArea';

function App() {
  return (
    <div className="App">
      {/* <Switch>
        <Router path='/LoginPage' exact={true} component={LoginPage}/>
        <Router path='/HeaderArea' component={HeaderArea}/>
      </Switch> */}
      <LoginPage/>
    </div>
  );
}

export default App;
