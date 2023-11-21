import $api from "../http";





export default class AuthService {


    //  Регистрация 
    //  Введи правльный адрес эндпоинта вместо  /registration
    //  /registration в ковычках   '/ твой энпоинт '

    static async registration ( email, username, password) {
        console.log('В класск')
        return  $api.post('/users/auth/users/' , { email, username, password })
    }





    // Авторизация 
    static async login ( email, password ) {
        return  $api.post('/users/auth/jwt/create/' , {email, password})
    }






    // Выход 
    static async logout ( email, password ) {
        return  $api.post('/logout' , {email, password})
    }

} 