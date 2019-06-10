import React, { Component } from 'react'
import { connect } from 'react-redux'


class QuestionsView extends Component {

    render() {
        console.log(this.props)
        console.log(this.state)
        return (
            <div className='question-panel'>
                <h3>Asked by {this.props.questionAuthorUser.name}</h3>
                <div style={{display:'flex'}}>
                    <img className="avatar" src={this.props.questionAuthorUser.avatarURL} />
                    <div style={{width:'100%', textAlign:"center"}}>{this.props.question.optionOne.text}</div>
                </div>
                <button>View Poll</button>
            </div>
        )
    }
}

function mapStateToProps ( {authenticate, questions}, props) {
    return {
        question: questions[props.questionId],
        questionAuthorUser: authenticate.users[questions[props.questionId].author]
    }
}


export default connect(mapStateToProps)(QuestionsView)