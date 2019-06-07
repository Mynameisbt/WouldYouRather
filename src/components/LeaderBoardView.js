import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserRankView from './UserRankView';


class LeaderBoardView extends Component {

    render() {
        console.log(this.props)
        console.log(this.state)
        return (
            this.props.users.sort((a,b) => ( (b.questions.length + Object.keys(b.answers).length)-(a.questions.length + Object.keys(a.answers).length)  )).map((user) => (
                <UserRankView userId={user.id} key={user.id}/>
            ))
        )
    }
}

function mapStateToProps ( {authenticate}, props) {
    return {
        users: Object.keys(authenticate.users).map(key => authenticate.users[key])
    }
}


export default connect(mapStateToProps)(LeaderBoardView)