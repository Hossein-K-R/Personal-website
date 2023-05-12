import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch,
  Routes,

} from 'react-router-dom';
import About from '../About/About';
import Home from '../Home/Home';
import Contact from '../Contact/Contact';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      <Route exact path='/'>        
          <Home/>
      </Route>
      <Route path='/about'>
          <About/>
      </Route>
      <Route path='/contact'>
          <Contact/>
      </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
