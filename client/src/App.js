import {
  BrowserRouter as Router,
  Routes,
  Route,  
} from "react-router-dom";
import React, { Suspense } from 'react';

import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import Auth from './hoc/auth'

import Footer from './components/views/Footer/Footer';
import NavBar from './components/views/NavBar/NavBar';



function App() {

  const AuthenticLandingPage  = Auth( LandingPage , null)
  const AuthenticLoginPage  = Auth( LoginPage , false)
  const AuthenticRegisterPage = Auth( RegisterPage , false)
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
    <Router>
      <NavBar />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}> 
        <Routes>
          <Route path="/" element={<AuthenticLandingPage />} />
          <Route path="/login" element={<AuthenticLoginPage />} />
          <Route path="/register" element={<AuthenticRegisterPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
    </Suspense>
  );
}

export default App;