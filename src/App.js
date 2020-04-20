import React from 'react';
import './App.scss';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Single-Page Navigation
import Header from './Header/Header';
import Menu from './Menu/Menu';
import Locations from './Locations/Locations';
import About from './About/About';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

// Multi-Page Navigation
import Catering from './Catering/Catering';
import Rewards from './Rewards/Rewards';
import Careers from './Careers/Careers';

function App() {
  return (
    <Router>
      {/* Routes */}
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/catering" component={Catering} />
        <Route path="/rewards" component={Rewards} />
        <Route path="/careers" component={Careers} />
      </Switch>
      <Footer></Footer> 
    </Router>  
  );
}

function Home() {
  return (
    <div>
    <Header></Header>
    <Menu></Menu>
    <Locations></Locations>
    <About></About>
    <Contact></Contact>
    </div>
  )
}

export default App;
