import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
                <a href='/login'>Login</a>
                <a href='/register'>Registro</a>
            </div>
        );
    }
}

export default Home;