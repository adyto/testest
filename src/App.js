import React, { useEffect } from 'react';
import { Login, HomePage, Leave } from './components';
import {
  BrowserRouter,
  Routes,
  Route,
  redirect,
  useNavigate,
} from 'react-router-dom';
import AuthService from './services/AuthService';

const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const user = AuthService.getCurrentUser();
    const goToLoginPage = () => navigate('/login');
    if (!user) {
      goToLoginPage();
      // return redirect('/login');
    }
    // return () => {
    //   user = true;
    // };
  }, [navigate]);
  return (
    // <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/leave" element={<Leave />} />
    </Routes>
    // </BrowserRouter>
  );
};

export default App;
