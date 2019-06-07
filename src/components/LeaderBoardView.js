import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserRankView from './UserRankView';


class LeaderBoardView extends Component {

    render() {
        console.log(this.props)
        console.log(this.state)
        return (
            Object.keys(this.props.users).map((userKey) => (
                <UserRankView userId={userKey} key={userKey}/>
            ))
        )
    }
}

function mapStateToProps ( {authenticate}, props) {
    return {
        users: authenticate.users,
    }
}


export default connect(mapStateToProps)(LeaderBoardView)