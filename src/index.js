import ReactDOM from 'react-dom';
import App from './app/App.js';
import { store } from './store/store.js';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  
  <BrowserRouter>

    <Provider store={store} >
        <App />
    </Provider>

  </BrowserRouter>,
  document.getElementById('root')

);