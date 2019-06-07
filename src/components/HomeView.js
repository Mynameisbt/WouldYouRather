import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logoutUser } from '../actions/authenticate'


class HomeView extends Component {
    logout = (e) => {
        this.props.dispatch(logoutUser())
    }
    render() {
        console.log(this.props)
        console.log(this.state)
        return (
            <div>
                <h3>Home View</h3>
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


export default connect(mapStateToProps)(HomeView)