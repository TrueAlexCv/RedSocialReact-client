import React, { Component } from 'react';
import { useHistory } from "react-router-dom";
import './App.css';
import DefaultIcon from "./assets/icons/default-icon.png";
import { getIdentity } from './services/user';

class App extends Component {
  render() {
    let identity = getIdentity();
    return (
      <Header identity={identity} />
    );
  }
}

function Header(props) {
  const identity = props.identity;
  if (identity !== null) {
    return <Login identity={identity} />
  } else {
    return <NoLogin />
  }
}

function NoLogin() {
  return (
    <div className="header">
      <img src={DefaultIcon} alt="" />
      <h1>Twitter Rojo</h1>
    </div>
  );
}

function Login(props) {
  let history = useHistory();
  function logout() {
    localStorage.clear();
    history.push('/users');
  }
  return (
    <div className="header">
      <img src={DefaultIcon} alt="" />
      <h1>Twitter Rojo</h1>
      {
        (<h1>Hola {props.identity.name}</h1>)
      }
      <div>
        <button onClick={(e) => logout()} >Cerrar sesión</button>
      </div>
    </div>
  );
}

export default App;
