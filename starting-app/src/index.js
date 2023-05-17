import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
// import Register from './Register';
import Products from './Products';
import Home from './Home';
import Payment from './Payment'
import Order from './Order';
import Settings from './Settings';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Login /> } />
      {/* <Route path='/register' element={ <Register /> } /> */}
      <Route path='/home' element={ <Home /> } />
      <Route path='/products' element={ < Products /> } />
      <Route path='/payment' element={ < Payment /> } />
      <Route path='/order' element={ < Order /> } />
      <Route path='/settings' element={ < Settings /> } />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

