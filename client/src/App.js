import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import Auth from './hoc/auth'

import Footer from './components/views/Footer/Footer';



function App() {

  const AuthenticLandingPage  = Auth( LandingPage , null)
  const AuthenticLoginPage  = Auth( LoginPage , false)
  const AuthenticRegisterPage = Auth( RegisterPage , false)
  return (
    <Router>
      <div> 
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Routes>
          <Route path="/" element={<AuthenticLandingPage />} />
          <Route path="/login" element={<AuthenticLoginPage />} />
          <Route path="/register" element={<AuthenticRegisterPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;