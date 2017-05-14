import axios from 'axios';
import { ajaxHandler } from './ajaxRequestsHandler';

export function news() {
    return dispatch => {
        dispatch(ajaxHandler({
            text: 'Ajax started at ' + new Date().toLocaleString(),
            isLoading: true
        }));
        return axios.get('http://slschedule.nooooo.ru/api/v5/?method=getNews').then(res => {
            dispatch(ajaxHandler({
                text: 'Ajax finished at ' + new Date().toLocaleString(),
                isLoading: false
            }));
            return res.data.response;
        });
    }
};
