import React from 'react';
import './App.css';
import LoginView from './components/LoginView'
import { connect } from 'react-redux'
import { handleInitialData } from './actions/shared'
import HomeView from './components/HomeView';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div className="App">
        {
          this.props.authenticated ? <HomeView/>: <LoginView/>
        }
      </div>
    )
    }
}

function mapStateToProps({authenticate}) {
  return {
    authenticated: authenticate.currentUser ? true : false
  }
}

export default connect(mapStateToProps)(App)
