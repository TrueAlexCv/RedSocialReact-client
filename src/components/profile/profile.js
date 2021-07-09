import React, { Component } from "react";
import { getIdentity } from '../../services/user';

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            identity: []
        }
    }

    render() {
        let { identity } = this.state;
        identity = getIdentity();
        return (
            <div>
                <h1>{identity.nick}</h1>
                <button onClick={(e) => { this.getIdentity() }}>Dios</button>
            </div>
        )
    }

    getIdentity() {
        let { identity } = this.state;
        identity = getIdentity();
        console.log(identity);
        return identity;
    }
}

export default Profile;