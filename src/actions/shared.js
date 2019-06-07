import { _getUsers } from '../_DATA'
import { _getQuestions } from '../_DATA'
import { getUsers } from './authenticate'
import { receiveQuestions } from './questions'

export function handleInitialData() {
    return (dispatch) => {
         _getUsers()
            .then((users) => {
                dispatch(getUsers(users))
            })
        _getQuestions()
        .then((questions)=> {
            dispatch(receiveQuestions(questions))
        });
        return;
        // return getInitialData()
        //     .then(({users, tweets}) => {
        //         dispatch(receiveUsers(users))
        //         dispatch(receiveTweets(tweets))
        //         dispatch(setAuthedUser(AUTHED_ID))
        //         dispatch(hideLoading())
        //     } )
    }
}