import React from 'react';
import { Login, HomePage, Leave } from './components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/leave" element={<Leave />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
