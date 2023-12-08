import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { 
  Header,
  Confirmed,
  SignIn, 
  Footer, 
  RegistrationActivation, 
  RegistrationConfirmation, 
  SignUp,
  HomePage,
  News,
  UserAccount,
  ChoseAccount
} from './components';

const App = () => {
  return (
    <>
    <Header />
    <Routes>
      
      <Route path='/'>
        
        <Route index element={<HomePage />} />
        <Route path='news' element={<News />} />
        <Route path='accounts' element={<ChoseAccount />} />
        <Route path='user/acc'>
          <Route index element={<UserAccount />} />
        </Route>

        <Route path='sign-up' element={<SignUp />} />
        <Route path='sign-in' element={<SignIn />} />
        <Route path='registration' element={<RegistrationConfirmation />} />
        <Route path='confirmed' element={<Confirmed />} />
        <Route path={'activate/:uid/:token'} element={<RegistrationActivation />} />

      </Route>
    
    </Routes>
    <Footer />
    </>
  );
};

export default App;