import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import About from './about'
import Contact from './contact'
import Home from './home'
import Lpage from './lpage'
import Portfolio from './portfolio'
// import Nav from './navbar'





function App() {
    return(
      <Router>
        <div>
          <Route exact path="/" component={Lpage} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/home" component={Home} />
          <Route path="/portfolio" component={Portfolio} />
          
        </div>
      </Router>
    )
  
}

export default App;
