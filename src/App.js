<<<<<<< HEAD
import React from 'react';
import { Routes, Route} from 'react-router-dom';
import { SignIn } from './components/SignIn';
import { Footer, SignUp } from './components';
import Header from './components/Header/Header';
=======
import React, {useContext} from 'react';
import { Route, Routes } from 'react-router-dom';
import Enter from './pages/enter';
import MainLayout from './layouts/MainLayout'; 
import "./scss/app.scss"


import Registration from "./components/Forms/Registration/Registration"
import Auth from "./components/Forms/Login/Auth"
import {Context} from "./index";
>>>>>>> 06c3e43373360997c6550ab1002b3fd3b8012ce4

const App = () => {
  return (
    <>
    <Header />
    <Routes>
<<<<<<< HEAD
      
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
=======
    <Route
      path="/"
      element={<MainLayout />}
    >


      <Route
        path="/authorization"
        element={<Enter  form={Auth}   />}
      />

      <Route
        path="/registration"
        element={<Enter   form={Registration} />}
      />



    </Route>
  </Routes>
>>>>>>> 06c3e43373360997c6550ab1002b3fd3b8012ce4
  );
};

//<Route path="/enter" element={<Enter Registration={Registration} />} />

export default App;