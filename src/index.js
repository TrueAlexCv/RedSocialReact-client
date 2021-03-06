import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components:
import Home from './components/home/home';
import Login from './components/login/login';
import Register from './components/register/register';
import Timeline from './components/timeline/timeline';
import Users from './components/users/users';
import Profile from './components/profile/profile';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/timeline' component={Timeline} isPrivate />
        <Route exact path='/users' component={Users} isPrivate />
        <Route exact path='/profile' component={Profile} isPrivate />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
