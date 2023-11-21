
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

        try {
            const response = await AuthService.registrtion(email, password)
            localStorage.setItem('token', response.data.accessToken )
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch (e) {
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