import axios from 'axios';
import { ApiUrl } from './env';

export const Axios = () => {

    const axiosCreated = axios.create({
        baseURL: ApiUrl(),        
    });
    return axiosCreated;

}

export const AxiosForm = () => {

    const axiosCreated = axios.create({
        baseURL: ApiUrl(),
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });

    return axiosCreated;

}