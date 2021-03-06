import React from 'react';
import ReactDOM from 'react-dom';
import { Router, routerHistory } from 'react-router';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer'
import setAuthorizationToken from './utils/setAuthorizationToken'
import { setCurrentUser } from './actions/authActions';
import routes from './routes';
import jwt from 'jsonwebtoken';
import scss from '../sass/index.scss';

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.window.__REDUX_DEVTOOLS_EXTENSION__ ? window.window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
);
setAuthorizationToken(localStorage.jwtToken);
if(localStorage.jwtToken) {
    store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)));
}

ReactDOM.render(
    <Provider store={store}>
        <Router onUpdate={() => window.scrollTo(0, 0)} history={routerHistory} routes={routes} />
    </Provider>, document.querySelector('.wrapper'));
