import { combineReducers } from 'redux'
import authenticate from '../reducers/authenticate'
import questions from '../reducers/questions'

export default combineReducers( {
    authenticate,
    questions
})