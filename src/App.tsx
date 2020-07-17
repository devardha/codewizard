import React, { useEffect } from 'react';
import './App.scss';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Home from './pages/Home';
import Cheatsheet from './pages/Cheatsheet';

function App(props: any){


    return (
      <Router>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/cheatsheet" exact component={Cheatsheet}/>
          </Switch>
          <Footer/>
        </div>
      </Router>
    );
}

export default App;
