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

ReactDOM.render(
  <React.StrictMode>
    {/* Part 1 */}
    <JoinUs />
    <Settings />
    <Login />
    <ContactUs />

    {/* Part 2 */}
    <StylishButton bgColor = "#1a98c9" title="Join Us" color="white" />
    <StylishButton bgColor = "#7db4c1" title="Settings" color="white" />
    <StylishButton bgColor = "#f79420" title="Login" color="white" />
    <StylishButton bgColor = "#b32832" title="Contact Us" color="white" />
    

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
