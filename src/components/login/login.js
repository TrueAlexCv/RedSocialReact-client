import React, { Component } from 'react';
import { login } from '../../services/user';

class Login extends Component {

    render() {
        return (
            <div>
                <h1>Login</h1>
                <a href='/register'>No tengo cuenta, quiero registrarme</a>
                <a href='/'>Home</a>

                <form id="loginForm">
                    <label>Email:</label>
                    <input type="text" id="email" required />
                    <label>Contraseña:</label>
                    <input type="password" id="password" required />
                    <input type="button" onClick={(e) => this.loginIdentity()} value="Iniciar Sesión" />
                </form>
            </div>
        );
    }

    loginIdentity() {
        login({
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            gettoken: false
        }).then((res) => {
            localStorage.setItem('identity', JSON.stringify(res.data.user));
            this.loginToken();
        }).catch((err) => {
            console.log(err);
        });
    }

    loginToken() {
        login({
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            gettoken: true
        }).then((res) => {
            localStorage.setItem('token', JSON.stringify(res.data.token));
            document.getElementById('loginForm').reset();
        }).catch((err) => {
            console.log(err);
        })
    }
}

export default Login;