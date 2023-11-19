import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Enter from './pages/enter';
import MainLayout from './layouts/MainLayout'; 
import "./scss/app.scss"





const App = () => {
  return (
    <Routes>
    <Route
      path="/"
      element={<MainLayout />}
    >
      <Route
        path=""
        element={<Enter />}
      />

    </Route>
  </Routes>
  );
};

export default App;