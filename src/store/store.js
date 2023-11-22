
import { makeAutoObservable, makeObservable } from "mobx";

import AuthService from "../services/AuthService";



export default class Store {

    user = {key: 'пример'}
    isAuth = false


    constructor() {
        makeAutoObservable(this)
    }


    setAuth(bool) {
        this.isAuth = bool
    }

    setUser(user) {
        this.user = user
    }



    // Запрос на логирование 
    async login(email, password) {

        console.log('Лоигрование в store')

        try {
            const response = await AuthService.login(email, password)
            // Предположим, у вас есть refresh token
            let refreshToken = response.data.refresh;
            console.log(refreshToken)
            document.cookie = refreshToken;

            console.log(response, '- ответ от сервера')
            localStorage.setItem('token', response.data.access )
            // console.log(response.data.access)
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch (e) {
            console.log(e, '- общая ошибка')
            console.log(e.response?.data?.message)
        }
    }



    // Регистрация 
    async Registration(email, name, password ) {

        console.log(email, name, password, 'то что пришло в функцию' ); // Отправка данных формы


        try {
            const response = await AuthService.registration(email, name, password )
            localStorage.setItem('token', response.data.accessToken )
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch (e) {
            console.log(e, '- общая ошибка')
            console.log(e.response?.data?.message)
        }
    }

    

}