import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { 
  AccountSettings, 
  Accounts, 
  Confirmed, 
  Footer, 
  Header, 
  HomePage, 
  News, 
  RegistrationActivation, 
  RegistrationConfirmation, 
  SelectedPostAccount, 
  SelectedPostArticle, 
  SignIn, 
  SignUp, 
  UserAccount
} from '../pages';
import { Loader } from '../shared';


const App = () => {
  return (
    <>
      <Header />
      <Routes>
        
        <Route path='/'>
          
          <Route index element={<HomePage />} />
          {/* <Route path='news' element={<News />} /> */}
          <Route path='accounts' element={<Accounts />} />
          <Route path={'accounts/:slug'} element={<SelectedPostAccount />} />
          <Route path={'articles/:slug'} element={<SelectedPostArticle />} />

          <Route path='user'>
            <Route index element={<AccountSettings />} />
            <Route path={'account'} element={<UserAccount />} />
          </Route>

          <Route path={'loading'} element={<Loader />} />

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