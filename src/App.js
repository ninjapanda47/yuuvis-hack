import React, { Component } from 'react'
import NavBar from './components/NavBar'
import Upload from './components/Upload'
import Search from './components/Search'
import Intro from './components/Intro'
import Footer from './components/Footer'
import Login from './components/Login'
import SignUp from './components/SignUp'
import { Route, Switch } from "react-router-dom";
import './App.css';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isloggedin: false,
      username: ''
    };

  }

  checkUserLogin = ({ isloggedin, username }) => {
    console.log('making sure this runs')
    isloggedin ? this.setState({ isloggedin: true, username: username }) : this.setState({ isloggedin: false })
    console.log('check state', this.state)
  }

  render() {
    return (
      <div className="App">
        <Route
          path="/"
          render={props => <NavBar {...props} isloggedin={this.state.isloggedin} username={this.state.username} />}
        />
        <Route component={Footer} />
        <Switch>
          <Route
            exact
            path="/"
            component={Intro} />
          <Route path='/upload' component={Upload} />
          <Route path='/search' component={Search} />
          <Route
            path="/login"
            render={props => <Login {...props} isloggedin={this.checkUserLogin} />}
          />
          <Route path='/signup' component={SignUp} />
        </Switch>
      </div>
    )
  }
}

export default App



