import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Enter from './pages/enter';
import MainLayout from './layouts/MainLayout'; 
import "./scss/app.scss"


import Registration from "./components/Forms/Registration/Registration"
import Auth from "./components/Forms/Login/Auth"

const App = () => {
  return (
    <Routes>
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
  );
};

//<Route path="/enter" element={<Enter Registration={Registration} />} />

export default App;