import axios from 'axios';
import config from '../config';
const api = axios.create();


api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('TOKEN');
        // eslint-disable-next-line no-param-reassign
        if (token) config.headers.Authorization = token;
        return config;
    },
    error => Promise.reject(error),
);

const defaultHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
};

const processRequest = (method, endPoint, requestData, headerConfig) => {
    if (method === 'get') {
        return api.get(endPoint, headerConfig);
    } if (method === 'post') {
        return api.post(endPoint, requestData, headerConfig);
    } if (method === 'put') {
        return api.put(endPoint, requestData, headerConfig);
    } if (method === 'patch') {
        return api.patch(endPoint, requestData, headerConfig);
    } if (method === 'delete') {
        return api.delete(endPoint, headerConfig);
    }
    throw new Error('Invalid method passed');
};

const getHeaders = () => {
    const headers = {
        ...defaultHeaders,
    };
    return headers;
};

export default {
    sendRequest(method, endPoint, requestData = null) {
        const headers = getHeaders();
        return processRequest(method, config.API_HOST + endPoint, requestData, headers)
            .then(response => response)
            .catch((error) => {
                throw error;
            });
    },
};
