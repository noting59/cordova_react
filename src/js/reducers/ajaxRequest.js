import { AJAX_HANDLER } from '../actions/types';

export default (state = [], action = {}) => {
    switch (action.type) {
        case AJAX_HANDLER :
            return {
                message:   action.message,
                isLoading: action.isLoading
            }
        default: return state;
    }
}
