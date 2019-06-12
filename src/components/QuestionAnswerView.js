import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


class QuestionsAnswerView extends Component {

    hasUserAnsweredQuestion = () => {
        if (this.props.question.optionOne.votes.indexOf(this.props.currentUser.id) === -1 &&
            this.props.question.optionTwo.votes.indexOf(this.props.currentUser.id) === -1) {
                return false;
            } else {
                return true;
            }
    }

    voteLabel = (index) => {
        const optionOneVotes = this.props.question.optionOne.votes.length
        const optionTwoVotes = this.props.question.optionTwo.votes.length
        const totalVotes =  optionOneVotes + optionTwoVotes;
        let optionVote = 0
        if (index == 1) {
            return optionOneVotes + " of " + totalVotes + " votes " + (optionOneVotes/totalVotes * 100.0).toFixed(2) + "%"
        } else {
            return optionTwoVotes + " of " + totalVotes + " votes " + (optionTwoVotes/totalVotes * 100.0 ).toFixed(2) + "%"
        }
    }

    yourVoteLabel = (index) => {
        if (index === 1 && this.props.question.optionOne.votes.indexOf(this.props.currentUser.id) > -1 || 
            index === 2 && this.props.question.optionTwo.votes.indexOf(this.props.currentUser.id) > -1
        )  {
            return <div>Your Vote</div>
        }
    }

    render() {
        console.log(this.props)
        console.log(this.state)
        return (
            <div className='question-panel'>
                <h3>Asked by {this.props.questionAuthorUser.name}</h3>
                {
                    this.hasUserAnsweredQuestion() ? (
                    <div>
                        <div>
                            <div>{this.props.question.optionOne.text}</div>
                            <div>{this.voteLabel(1)}</div>
                            {this.yourVoteLabel(1)}
                        </div>
                        <div>
                            <div>{this.props.question.optionTwo.text}</div>
                            <div>{this.voteLabel(2)}</div>
                            {this.yourVoteLabel(2)}
                        </div>
                    </div>
                )
                    :
                (
                <div>
                    <h3>Would you rather?</h3>
                    <div>
                        <input type="radio" name="question" value="1"/>{this.props.question.optionOne.text}?
                    </div>
                    <div>
                        <input type="radio" name="question" value="2"/>{this.props.question.optionTwo.text}?
                    </div>
                    <div>
                        <button>Vote</button>
                    </div>
                </div>
                ) 
                }
            </div>
        )
    }
}

function mapStateToProps ( {authenticate, questions}, props) {
    let currentUser = authenticate.users[authenticate.currentUser];    
    return {
        currentUser: currentUser,
        question: questions[props.match.params.questionId],
        questionAuthorUser: authenticate.users[questions[props.match.params.questionId].author]
    }
}


export default withRouter(connect(mapStateToProps)(QuestionsAnswerView))