import React, { Component } from 'react';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home}></Route>
          <Route exact path='/portfolio' component={Portfolio}></Route>
          <Route exact path='/contact' component={Contact}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
