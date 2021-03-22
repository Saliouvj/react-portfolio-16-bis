// Import du CSS et de REACT
import React from 'react';
import { BrowserRouter as Browser, Switch, Route, 
} from "react-router-dom";


// Import de votre composants/modules

import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About'
import Navigation from './component/Navigation';
import Mycarousal from './component/Mycarousal';
// Import de vos Images

// ----------------------------------------------------------------------------------------------------------------------------------------------------- //



function App() {
  return (
    <Browser>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/about' component={About}/>
        <Navigation/>
        <Mycarousal/>
        
      </Switch>
    </Browser>
  );
}

export default App;