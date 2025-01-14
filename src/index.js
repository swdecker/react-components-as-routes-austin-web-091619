import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import NavBar from './components/NavBar'






ReactDOM.render((
<Router>
  <div>
    <NavBar />
    <Route exact path='/' component={Home} />
    <Route exact path ='/about' component={About} />
    <Route exact path='/login' component={Login} />
  </div>
</Router>
)
  ,
  document.getElementById('root')
);
