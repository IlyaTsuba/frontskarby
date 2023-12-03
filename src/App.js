import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { 
  Header,
  Confirmed,
  SignIn, 
  Footer, 
  RegistrationActivation, 
  RegistrationConfirmation, 
  SignUp
} from './components';

const App = () => {
  return (
    <>
    <Header />
    <Routes>
      
      <Route path='/'>
        
        <Route index element={<div>HomePage</div>} />
        
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