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

import PostList from './components/views/Post/PostList';
import PostDetail from './components/views/Post/PostDetail'
import New from './components/views/Post/New';
import Edit from './components/views/Post/Edit'


function App() {

  const AuthenticLandingPage  = Auth( LandingPage , null)
  const AuthenticLoginPage  = Auth( LoginPage , false)
  const AuthenticRegisterPage = Auth( RegisterPage , false)
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
    <Router>
      <NavBar />
      <div style={{ paddingTop: '113px', minHeight: 'calc(100vh - 80px)' }}> 
        <Routes>
          <Route path="/" element={<AuthenticLandingPage />} />
          <Route path="/login" element={<AuthenticLoginPage />} />
          <Route path="/register" element={<AuthenticRegisterPage />} />
          <Route path="/posts" element={<PostList />}/>
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/posts/:id/edit" element={<Edit />} />
          <Route path="/posts/new" element={<New />} />
        </Routes>
      </div>
      <Footer />
    </Router>
    </Suspense>
  );
}

export default App;