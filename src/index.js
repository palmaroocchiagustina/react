import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";
initializeApp( {
  apiKey: "AIzaSyDbZPcRgIUuGwbTCiYpgSy7E1OfAYxTVk8",
  authDomain: "react-chill-out.firebaseapp.com",
  projectId: "react-chill-out",
  storageBucket: "react-chill-out.appspot.com",
  messagingSenderId: "439437240753",
  appId: "1:439437240753:web:12d4d0be076864c4763590",
  measurementId: "G-32W2NMBJZ4"
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <>
  {/*<React.StrictMode>*/}
    <App />
  {/*</React.StrictMode>*/}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
