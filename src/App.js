import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

const Homepage = React.lazy(() => import('./pages/Homepage'));
const AboutUs = React.lazy(() => import('./pages/AboutUs'));
const Tour = React.lazy(() => import('./pages/Tour'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Footer = React.lazy(() => import('./components/Footer'));
const Detail = React.lazy(() => import('./pages/Detail'));

function App() {
  return (
    <React.Suspense fallback={<div/>}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/gioi-thieu' component={AboutUs} />
          <Route path='/tour' component={Tour} />
          <Route path='/lien-he' component={Contact} />
          <Route path='/chi-tiet' component={Detail} />
          <Redirect to='/' />
        </Switch>
        <Footer />
      </Router>
    </React.Suspense>
  );
}

export default App;
