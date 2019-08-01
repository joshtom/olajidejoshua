import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Lpage from './lpage'
import About from './about'
import Contact from './contact'
import Home from './home'
// import Nav from './navbar'





function App() {
    return(
      <Router>
        <div>
          <Route exact path="/" component={Lpage} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/home" component={Home} />
          
        </div>
      </Router>
    )
  
}

export default App;
