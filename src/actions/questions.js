import {_saveQuestionAnswer } from '../_DATA'
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS"
export const ANSWER_QUESTION = "ANSWER_QUESTION"
export const ADD_QUESTION = "ADD_QUESTION"

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

function answerQuestion(id, currentUser, answer) {
    return {
        type: ANSWER_QUESTION,
        id,
        currentUser,
        answer
    }
}

export function handleAnswerQuestion(id, currentUser, answer) {
    return (dispatch) => {
        dispatch(answerQuestion(id, currentUser, answer))

        return  _saveQuestionAnswer({authedUser:currentUser,qid:id, answer}).catch( () => {
            alert('An error occurred');
        });
    }
   
}

export function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}