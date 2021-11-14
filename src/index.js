import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from "./components/ReactMobileOS/Header"
import List from "./components/ReactMobileOS/List"

ReactDOM.render(
  <React.StrictMode>
    <Header title = "Mobile Operating System" />
    <List items = {["Android", "Blckberry", "iPhone", "Windows Phone"]} />

    <Header title = "Mobile Manufacturers" />
    <List items={["Samsung", "HTC", "Micromax", "Apple"]} />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
