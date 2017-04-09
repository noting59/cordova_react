import axios from 'axios';

export function news() {
    return dispatch => {
        return axios.get('http://slschedule.nooooo.ru/api/v5/?method=getNews');
    }
};
