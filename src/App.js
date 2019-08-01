import React, { Component }  from 'react';
import Chips from "./Chips";
import VendingMachine from "./VendingMachine";
import Sardines from "./Sardines";
import Soda from "./Soda";
import {Route, Switch} from "react-router-dom";
import Navbar from "./Navbar";
import logo from './logo.svg';
import './App.css';

class App extends Component{
  render(){
    return(
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' render={() => <VendingMachine />} />
          <Route exact path='/soda' render={() => <Soda  />} />
          <Route exact path='/sardines' render={() => <Sardines />} />
          <Route exact path='/chips' render={() => <Chips />} />
        {/* <Chips />
        <Sardines />
        <Soda /> */}</Switch>
      </div>
    );
  }
}

export default App;
