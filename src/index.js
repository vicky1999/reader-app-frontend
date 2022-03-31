import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AdminLogin from './components/AdminLogin';
import AdminSignUp from './components/AdminSignUp';

ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}></Route>
    <Route path="/admin/login" element={<AdminLogin />}></Route>
    <Route path="/admin/signup" element={<AdminSignUp />}></Route>

  </Routes>
</BrowserRouter>,
  document.getElementById('root')
);

