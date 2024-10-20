import axios from 'axios';
export const API_URL = `https://localhost:7196/api`;

const _api = axios.create({
    withCredentials: true,
    baseURL: API_URL,
});

export default _api;
