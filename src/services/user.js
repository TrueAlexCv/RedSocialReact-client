import axios from 'axios';

const api = 'http://localhost:3800/api/';

export function register(user) {
    return axios.post(api + 'register',
        user,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        });
}

export function login(user) {
    return axios.post(api + 'login',
        user,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        });
}

export function getIdentity() {
    const identity = JSON.parse(localStorage.getItem('identity'));

    if (identity !== 'undefined') {
        return identity;
    } else {
        return null;
    }
}

export function getToken() {
    const token = JSON.parse(localStorage.getItem('token'));

    if (token !== 'undefined') {
        return token;
    } else {
        return null;
    }
}

export function getUsers() {
    return axios.get(api + 'users', {
        headers: {
            'Content-Type': 'application/json',
            Authorization: JSON.parse(localStorage.getItem('token'))
        }
    });
}

export function getTimeline() {
    return axios.get(api + 'timeline', {
        headers: {
            'Content-Type': 'application/json',
            Authorization: JSON.parse(localStorage.getItem('token'))
        }
    });
}

/* Extra: */

const defaultOptions = {
    baseURL: api,
    headers: {
        'Content-Type': 'application/json',
    },
};

// Create instance
let instance = axios.create(defaultOptions);

// Set the AUTH token for any request
instance.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
});