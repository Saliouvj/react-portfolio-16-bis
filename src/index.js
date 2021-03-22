import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Import Bootstrap 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// Import Fortawesome
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
// import Scss
/////react comprend directement qu'il doit allez chercher dans node_modules
//bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css'
//bootstrap js
import 'bootstrap/dist/js/bootstrap.min.js'
import 'popper.js/dist/umd/popper.min.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
//icon
import '@fortawesome/fontawesome-free/css/all.min.css'

import Footer from "./component/Footer";
// your style
import './sass/app.scss'


ReactDOM.render(
  <React.StrictMode>
    <App />
    
		<Footer />
  </React.StrictMode>,
  document.getElementById('root')
);


