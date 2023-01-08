import axios from "axios";

export const API_URL = `http://localhost:3001`

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

$api.interceptors.request.use((config)=>{
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

export async function setNotificationKey(data){
    await $api.post('/notification', {key: data})
}

export default $api;

//password update