import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {initializeApp} from "firebase/app"
import App from './App';
import reportWebVitals from './reportWebVitals';

const firebaseConfig = {
  apiKey: "AIzaSyB6riiJnllyDZKj-VSgwd7kYuZdE7ReqTo",
  authDomain: "coderhouse-ecommerce-f3eea.firebaseapp.com",
  projectId: "coderhouse-ecommerce-f3eea",
  storageBucket: "coderhouse-ecommerce-f3eea.appspot.com",
  messagingSenderId: "511026051915",
  appId: "1:511026051915:web:d77be870005d8ead7b06ce"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
