import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logoutUser } from '../actions/authenticate'
import QuestionView from './QuestionView';


class AllQuestionsView extends Component {
    state = {
        selectedTab: 'Unanswered'
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
                <div className='tab'>
                        <button className='tablinks' onClick={() => this.goTab('Unanswered')}>Unanswered</button>
                        <button className='tablinks' onClick={() => this.goTab('Answered')}>Answered</button>
                </div>
                {
                    (this.state.selectedTab === 'Unanswered') ? 
                        this.props.unansweredQuestions.map((question) => <QuestionView questionId={question.id} />)
                     : this.props.answeredQuestions.map((question) => <QuestionView questionId={question.id} />) 
                }
            </div>
        )
    }
}

function mapStateToProps ( {authenticate, questions}) {
    let currentUser = authenticate.users[authenticate.currentUser];
    let answeredQuestionsKeys = Object.keys(currentUser.answers);
    let unAnsweredQuestionsKeys = Object.keys(questions).filter(key => answeredQuestionsKeys.indexOf(key) === -1);
    
    return {
        answeredQuestions: answeredQuestionsKeys.map((key)=> questions[key]),
        unansweredQuestions:  unAnsweredQuestionsKeys.map((key)=> questions[key]),
    }
}


export default connect(mapStateToProps)(AllQuestionsView)