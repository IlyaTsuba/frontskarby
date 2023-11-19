import $api from "../http";





export default class AuthService {


    //  Регистрация 
    //  Введи правльный адрес эндпоинта вместо  /registration
    //  /registration в ковычках   '/ твой энпоинт '

    static async registration ( email, password, name ) {
        console.log('В класск')
        return  $api.post('/registration' , { email, password, name })
    }





    // Авторизация 
    static async login ( email, password ) {
        return  $api.post('/login' , {email, password})
    }






    // Выход 
    static async logout ( email, password ) {
        return  $api.post('/logout' , {email, password})
    }

} 