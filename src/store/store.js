import { combineReducers, createStore, applyMiddleware } from "redux";
import user_reducer from './reducers/user_reducer'
import { all } from 'redux-saga/effects';
import { watcherUser } from "./action_creators";
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
function* rootSaga(){
  yield all([
    watcherUser()
  ])
}

const store = createStore(combineReducers({
  user: user_reducer,
}), applyMiddleware(sagaMiddleware))

const handleChange = () => {
  const currentValue = store.getState()
  localStorage.setItem('user', `${JSON.stringify(currentValue.user)}`);
}

store.subscribe(handleChange)

sagaMiddleware.run(rootSaga);

<<<<<<< HEAD
export { store }
=======
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
            console.log(response, '- ответ от сервера')
            localStorage.setItem('token', response.data.access)
            this.setAuth(true)

            console.log(this.isAuth)


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
            localStorage.setItem('token', response.data.access )
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch (e) {
            console.log(e, '- общая ошибка')
            console.log(e.response?.data?.message)
        }
    }

    

}
>>>>>>> 06c3e43373360997c6550ab1002b3fd3b8012ce4
