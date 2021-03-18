import React, { Component } from 'react';
import { getUsers } from '../../services/user';

class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            loading: true
        }
    }

    render() {
        const { loading } = this.state;
        return (
            <div>
                <h1>Users</h1>
                <div>
                    <button onClick={(e) => { this.getUsers() }}>Usuarios</button>
                </div>
                {
                    loading ? (<p>Loading users...</p>) : this.showUsers()
                }
            </div>
        );
    }
    getUsers() {
        console.log('Cargando usuarios...');
        getUsers().then((res) => {
            this.setState({
                users: res.data.users,
                loading: false
            });
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });
    }

    showUsers() {
        const { users } = this.state;
        return (
            <div>
                {users.map((user, index) => <p key={index}>
                    {user.nick}
                </p>
                )}
            </div>
        );
    };
}

export default Users;