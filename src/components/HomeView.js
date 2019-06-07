import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logoutUser } from '../actions/authenticate'


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
                <div>
                    <span>
                        <button onClick={() => this.goTab('Home')}>Home</button>
                        <button onClick={() => this.goTab('New Question')}>New Question</button>
                        <button onClick={() => this.goTab('Leader Board')}>Leader Board</button>
                        <span>Welcome {this.props.currentUser}</span>
                        <button onClick={this.logout}>Logout</button>
                    </span>
                </div>
                <div>
                    {
                        (this.state.selectedTab === 'Home') ? 
                            <div>Home</div>
                        :
                        (this.state.selectedTab === 'New Question') ? 
                            <div>New Question</div>
                        :
                        (this.state.selectedTab === 'Leader Board') ? 
                            <div>Leader Board</div>
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