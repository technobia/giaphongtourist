import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import AboutUs from './pages/AboutUs';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/gioi-thieu' component={AboutUs} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
