import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../actions/authenticate'
import { logoutUser } from '../actions/authenticate'

class LoginView extends Component {
    state = {
        selectedUser: ''
    }
    login = (e) => {
        this.props.dispatch(loginUser(this.state.selectedUser))
    }

    logout = (e) => {
        this.props.dispatch(logoutUser())
    }

    render() {
        console.log(this.props)
        console.log(this.state)
        return (
            <div>
                <h3>Login View</h3>
                <select value={this.state.selectedUser}  onChange={(e) => this.setState({selectedUser: e.target.value})}>
                <option value="" disabled selected>Select user</option>
                {
                    Object.keys(this.props.users).map((user) => <option key={user}>{user}</option>)
                }
                </select>
                <button onClick={this.login}>Login</button>
                <button onClick={this.logout}>Logout</button>
               
            </div>
        )
    }
}

function mapStateToProps ( {authenticate}) {
    return {
        users: authenticate.users ? authenticate.users : {}
    }
}


export default connect(mapStateToProps)(LoginView)