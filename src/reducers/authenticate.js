import { LOGIN_USER } from '../actions/authenticate'
import { LOGOUT_USER } from '../actions/authenticate'
import { GET_USERS } from '../actions/authenticate'
import { SET_ANSWER_USER }  from '../actions/authenticate'
import { SET_QUESTION_USER }  from '../actions/authenticate'

export default function authenticatedUsers(state={}, action) {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                currentUser:action.id
            }
        case LOGOUT_USER:
            return {
                ...state,
                currentUser: null
            }
        case GET_USERS:
                return  {
                    ...state,
                    users:action.users
                }
        case SET_ANSWER_USER:
                state.users[action.uid].answers[action.qid]=action.answer;
                return state;
        case SET_QUESTION_USER:
                state.users[action.uid].questions = state.users[action.uid].questions.concat(action.qid);
                return state;
        default:
            return state
    }
}