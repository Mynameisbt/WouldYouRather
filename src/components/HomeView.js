import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logoutUser } from '../actions/authenticate'
import AllQuestionsView from './AllQuestionsView';
import LeaderBoardView from './LeaderBoardView';
import CreateQuestionsView from './CreateQuestionView';

import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import QuestionAnswerView from './QuestionAnswerView';
import NotFound from './NotFound';
import { Redirect } from 'react-router-dom'


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
                        <Link to='/home/unanswered' className='tablinks' >Home</Link>
                        <Link to='/add' className='tablinks' >New Question</Link>
                        <Link to='/leaderboard' className='tablinks' >Leader Board</Link>
                        <span>Welcome {this.props.users[this.props.currentUser].name}</span>
                        <Link to='/' className='tablinks' onClick={this.logout}>Logout</Link>
                </div>
                <div style={{display:'flex', justifyContent:'center', flexDirection:'column',alignItems:'center'}}>
                    
                         <Route exact path='/' render={({ history }) => (
                            <Redirect to='/home'/>
                          )} />
                          <Route path='/home/' render={({ history }) => (
                            <AllQuestionsView/>
                          )} />
                          <Route path='/add' render={({ history }) => (
                            <CreateQuestionsView />
                          )} />
                        <Route path='/leaderboard' render={({ history }) => (
                            <LeaderBoardView />
                          )} />
                        <Route path='/question/:questionId' render={({ history }) => (
                            <QuestionAnswerView />
                          )} />
                        <Route path='/notfound' render={({ history }) => (
                            <NotFound/>
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