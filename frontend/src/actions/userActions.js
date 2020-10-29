import axios from 'axios'
import {API_BASE_URL} from "../index";

export const LOGIN_USER = 'LOGIN_USER'

export const userLoginFetch = user => {
    return dispatch => {
        return axios.post(`${API_BASE_URL}/authenticate`, user)
            .then(response => {
                localStorage.setItem("token", response.data.access_token)
                dispatch(loginUser(response.data.user))
            }).catch(err => {
                localStorage.removeItem("token")
            });
    }
}

const loginUser = userObj => ({
    type: LOGIN_USER,
    payload: userObj
})