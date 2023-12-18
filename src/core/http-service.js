import axios from "axios";
import { error } from "jquery";

const BASE_URL = "https://react-mini-projects-api.classbon.com";


export const httpService = axios.create({
baseURL: BASE_URL,
});

//interceptors--------token

export const httpInterceptedService = axios.create({
    baseURL: BASE_URL
});

httpInterceptedService.interceptors.request.use(
    async (config) =>{
        const token = localStorage.getItem('token');
        if (token) {
            config.headers = {
                Authorization: `Bearer ${token}` 
            };
        }
   return config;
    },
    (error) => Promise.reject(error)
)


//token--refresh---->
//when expire token return to login

httpInterceptedService.interceptors.response.use(
    (response) => response,
    async (error) => {
        if(error.response.status === 401) {
            window.location.href = '/Login';
        }
        
        return Promise.reject(error);
    }
)