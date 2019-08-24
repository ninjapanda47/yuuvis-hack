import React, { Component } from 'react'
import NavBar from './components/NavBar'
import Upload from './components/Upload'
import Intro from './components/Intro'
import Footer from './components/Footer'
import { Route, Switch } from "react-router-dom";
import './App.css';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Route component={NavBar} />
        <Route component={Footer} />
        <Switch>
          <Route
            exact
            path="/"
            component={Intro} />
          <Route path='/upload' component={Upload} />
        </Switch>
      </div>
    )
  }
}

export default App



