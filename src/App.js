import React from 'react';
import { Routes, Route} from 'react-router-dom';
import { SignIn } from './components/SignIn';
import { Footer, SignUp } from './components';
import Header from './components/Header/Header';

const App = () => {
  return (
    <>
    <Header />
    <Routes>
      
      <Route path='/'>
        
        <Route index element={<div>HomePage</div>} />
        
        <Route path='sign-up' element={<SignUp />} />
        <Route path='sign-in' element={<SignIn />} />
        {/* <Route path='/confirmed' element={<Confirmed />} /> */}
        {/* <Route path={'activate/:id/:token'} element={<RegistrationActivate />} /> */}
      </Route>
    
    </Routes>
    <Footer />
    </>
  );
};

export default App;