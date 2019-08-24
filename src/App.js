import React, { Component } from 'react'
import { Container, Row } from 'react-bootstrap';
import NavBar from './components/NavBar'
import { Route, Switch } from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Route component={NavBar} />
        <Switch>
        </Switch>

      </div>
    )
  }
}

export default App



