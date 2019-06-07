export const LOGIN_USER = "LOGIN_USER"
export const LOGOUT_USER = "LOGOUT_USER"
export const GET_USERS = "GET_USERS"

export function loginUser(id) {
    return {
        type: LOGIN_USER,
        id
    }
}

export function getUsers(users) {
    return {
        type: GET_USERS,
        users
    }
}

export function logoutUser() {
    return {
        type: LOGOUT_USER
    }
}