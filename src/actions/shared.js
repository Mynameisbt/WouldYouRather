import { _getUsers } from '../_DATA'
import { getUsers } from './authenticate'
export function handleInitialData() {
    return (dispatch) => {
        return _getUsers()
            .then((users) => {
                dispatch(getUsers(users))
            })


        // return getInitialData()
        //     .then(({users, tweets}) => {
        //         dispatch(receiveUsers(users))
        //         dispatch(receiveTweets(tweets))
        //         dispatch(setAuthedUser(AUTHED_ID))
        //         dispatch(hideLoading())
        //     } )
    }
}