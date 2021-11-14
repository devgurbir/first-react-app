import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import JoinUs from './components/ReactMenu/joinUs'
import Settings from './components/ReactMenu/settings'
import Login from './components/ReactMenu/Login'
import ContactUs from './components/ReactMenu/ContactUs'
import StylishButton from './components/ReactMenu/stylishButton'
import Card from "./components/FoodCard/Card"

ReactDOM.render(
  <React.StrictMode>
  <Card />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
