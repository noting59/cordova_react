import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import { SET_CURRENT_USER } from './types';
import jwt from 'jsonwebtoken';
import { ajaxHandler } from './ajaxRequestsHandler';


export function setCurrentUser(user) {
    return {
        type: SET_CURRENT_USER,
        user
    };
}

export function login(userData) {
    dispatch(ajaxHandler({
        text: 'Ajax started at ' + new Date().toLocaleString(),
        isLoading: true
    }));
    return dispatch => {
        return axios.post('http://localhost:8000/api/v1/login', { email: userData.email, password: userData.password }).then(res => {
            const token = res.data.token;
            localStorage.setItem('jwtToken', token);
            setAuthorizationToken(token);
            dispatch(setCurrentUser(jwt.decode(token)));
            dispatch(ajaxHandler({
                text: 'Ajax finished at ' + new Date().toLocaleString(),
                isLoading: false
            }));
        });
    }
}

export function logout() {
    dispatch(ajaxHandler({
        text: 'Ajax started at ' + new Date().toLocaleString(),
        isLoading: true
    }));
    return dispatch => {
        localStorage.removeItem('jwtToken');
        setAuthorizationToken(false);
        dispatch(setCurrentUser({}));
        dispatch(ajaxHandler({
            text: 'Ajax finished at ' + new Date().toLocaleString(),
            isLoading: false
        }));
    }
}

export function socialLogin(userData) {
    dispatch(ajaxHandler({
        text: 'Ajax started at ' + new Date().toLocaleString(),
        isLoading: true
    }));
    return dispatch => {
        return axios.post('http://localhost:8000/api/v1/social', { name: userData.name, social_id: userData.social_id, social_link: userData.social_link, service: userData.service }).then(res => {
            const token = res.data.token;
            localStorage.setItem('jwtToken', token);
            setAuthorizationToken(token);
            dispatch(setCurrentUser(jwt.decode(token)));
            dispatch(ajaxHandler({
                text: 'Ajax finished at ' + new Date().toLocaleString(),
                isLoading: false
            }));
        });
    }
}
