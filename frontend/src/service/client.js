import {API_BASE_URL} from "../index";
import axios from 'axios'

const client = axios.create({
})

client.interceptors.request.use(function (config) {
    const token =  localStorage.getItem("token")

    if ( token != null ) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
} );

export default client