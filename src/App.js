import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginView from './components/LoginView'
import { connect } from 'react-redux'
import { handleInitialData } from './actions/shared'

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <LoginView />
      </div>
    )
    }
}

export default connect()(App)
