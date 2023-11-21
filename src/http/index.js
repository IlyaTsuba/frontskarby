import axios from "axios";

// Локал хост
export const API_URL = 'http://127.0.0.1:8000'


const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})


$api.interceptors.request.use((config) => {
    // Проверяем, не является ли запрос функцией регистрации
    if (!config.url.endsWith('/users/auth/users/') && config.method !== 'post') {
        // Если не является, то добавляем заголовок Authorization
        config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    }
    return config
})


export default $api