/* eslint-disable */
import axios from "axios";

const instance = axios.create({
    baseURL: "",
    timeout: 30000,
    headers: {"X-Custom-Header": "foobar"},
});


//send token
instance.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(error);
    },
);


//404 or 401 pages use this response
instance.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        return Promise.reject(error);
    },
);

export default instance;