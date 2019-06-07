import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logoutUser } from '../actions/authenticate'


class QuestionsView extends Component {

    render() {
        console.log(this.props)
        console.log(this.state)
        return (
            <div>
                <h3>Would you rather?</h3>
                <div>{this.props.question.optionOne.text}?</div>
                <div>{this.props.question.optionTwo.text}?</div>
            </div>
        )
    }
}

function mapStateToProps ( {authenticate, questions}, props) {
    let currentUser = authenticate.users[authenticate.currentUser];    
    return {
        currentUser: currentUser,
        question: questions[props.questionId]
    }
}


export default connect(mapStateToProps)(QuestionsView)