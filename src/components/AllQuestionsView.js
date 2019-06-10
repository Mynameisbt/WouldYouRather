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

    sortQuestionsByRecentlyCreated = (q1, q2) => {
        const q1Date = q1.timestamp;
        const q2Date = q2.timestamp;

        if (q1Date > q2Date) {
            return -1;
        } else if (q1Date < q2Date) {
            return 1;
        } else {
            return 0;
        }
    }    

    render() {
        console.log(this.props)
        console.log(this.state)
        return (
            <div style={{width:'100%'}}>
                <div className='tab'>
                        <a className='tablinks' onClick={() => this.goTab('Unanswered')}>Unanswered</a>
                        <a className='tablinks' onClick={() => this.goTab('Answered')}>Answered</a>
                </div>
                <div className="questions-list">
                {
                    (this.state.selectedTab === 'Unanswered') ? 
                        this.props.unansweredQuestions.sort(this.sortQuestionsByRecentlyCreated).map((question) => <QuestionView questionId={question.id} />)
                    : this.props.answeredQuestions.sort(this.sortQuestionsByRecentlyCreated).map((question) => <QuestionView questionId={question.id} />) 
                }
                </div>   
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