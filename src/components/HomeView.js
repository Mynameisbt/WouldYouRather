import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logoutUser } from '../actions/authenticate'
import AllQuestionsView from './AllQuestionsView';
import LeaderBoardView from './LeaderBoardView';


class HomeView extends Component {
    state = {
        selectedTab: 'Home'
    }
    logout = (e) => {
        this.props.dispatch(logoutUser())
    }
    
    goTab = (tab) => {
        this.setState(() => ({
            selectedTab: tab
        }));
    }


    render() {
        console.log(this.props)
        console.log(this.state)
        return (
            <div>
                <h3>Home View</h3>
                <div className='tab'>
                        <button className='tablinks' onClick={() => this.goTab('Home')}>Home</button>
                        <button className='tablinks' onClick={() => this.goTab('New Question')}>New Question</button>
                        <button className='tablinks' onClick={() => this.goTab('Leader Board')}>Leader Board</button>
                        <span>Welcome {this.props.users[this.props.currentUser].name}</span>
                        <button className='tablinks' onClick={this.logout}>Logout</button>
                </div>
                <div>
                    {
                        (this.state.selectedTab === 'Home') ? 
                            <AllQuestionsView/>
                        :
                        (this.state.selectedTab === 'New Question') ? 
                            <div>New Question</div>
                        :
                        (this.state.selectedTab === 'Leader Board') ? 
                            <LeaderBoardView />
                        : null
                    }   
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