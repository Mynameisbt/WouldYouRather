import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logoutUser } from '../actions/authenticate'
import AllQuestionsView from './AllQuestionsView';
import LeaderBoardView from './LeaderBoardView';
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'


class HomeView extends Component {
    state = {
        selectedTab: 'Home'
    }
    logout = (e) => {
        this.props.dispatch(logoutUser())
    }


    render() {
        console.log(this.props)
        console.log(this.state)
        return (
            <div>
                <h3>Home View</h3>
                <div className='tab'>
                        <Link to='/' className='tablinks' >Home</Link>
                        <Link to='/add' className='tablinks' >New Question</Link>
                        <Link to='/leaderboard' className='tablinks' >Leader Board</Link>
                        <span>Welcome {this.props.users[this.props.currentUser].name}</span>
                        <a className='tablinks' onClick={this.logout}>Logout</a>
                </div>
                <div>
                    
                          <Route exact path='/' render={({ history }) => (
                            <AllQuestionsView/>
                          )} />
                          <Route path='/add' render={({ history }) => (
                            <div>New Question</div>
                          )} />
                        <Route path='/leaderboard' render={({ history }) => (
                            <LeaderBoardView />
                          )} />
                </div>
            </div>
        )
    }
}

function mapStateToProps ( {authenticate}) {
    return {
        users: authenticate.users ? authenticate.users : {},
        currentUser: authenticate.currentUser
    }
}


export default connect(mapStateToProps)(HomeView)