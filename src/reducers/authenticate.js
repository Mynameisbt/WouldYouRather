import { LOGIN_USER } from '../actions/authenticate'
import { LOGOUT_USER } from '../actions/authenticate'
import { GET_USERS } from '../actions/authenticate'

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
        default:
            return state
    }
}