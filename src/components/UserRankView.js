import React, { Component } from 'react'
import { connect } from 'react-redux'


class UserRankView extends Component {

    render() {
        console.log(this.props)
        console.log(this.state)
        return (
            <div>
                <img src={this.props.user.avatarURL} />
                <h3>{this.props.user.name}</h3>
                <div>Answered Questions: {Object.keys(this.props.user.answers).length}</div>
                <div>Created Questions: {this.props.user.questions.length}</div>
            </div>
        )
    }
}

function mapStateToProps ( {authenticate}, props) {
    let user = authenticate.users[props.userId];    
    return {
        user: user,
    }
}


export default connect(mapStateToProps)(UserRankView)