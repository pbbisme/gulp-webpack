import * as request from '_tools/axiosAjax.js';


export function queryTopic(params) {
    return request.get('/topics', params);
}