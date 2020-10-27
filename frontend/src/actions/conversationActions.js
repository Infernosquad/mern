import {API_BASE_URL} from "../index";
import axios from 'axios'

export const GET_CONVERSATIONS = 'GET_CONVERSATIONS'

export const getConversations = () => async dispatch => {
    // try{
        const res = await axios.get(`${API_BASE_URL}/conversations`)
        dispatch( {
            type: GET_CONVERSATIONS,
            payload: res.data
        })
    // }
    // catch(e){
        // dispatch( {
        //     type: USERS_ERROR,
        //     payload: console.log(e),
        // })
    // }
}