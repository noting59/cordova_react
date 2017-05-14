import { AJAX_HANDLER } from './types';

export function ajaxHandler(message) {
    return {
        type: AJAX_HANDLER,
        message: message.text,
        isLoading: message.isLoading
    }
}
