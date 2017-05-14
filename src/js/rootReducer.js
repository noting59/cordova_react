import { combineReducers } from 'redux';

import flashMessages from './reducers/flashMessages';
import auth from './reducers/auth';
import ajaxRequest from './reducers/ajaxRequest';

export default combineReducers({
    flashMessages,
    auth,
    ajaxRequest
});
