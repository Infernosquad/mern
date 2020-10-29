import {API_BASE_URL} from "../index";
import axios from '../service/client'

export const GET_CONVERSATIONS = 'GET_CONVERSATIONS'

export const getConversations = () => {
    return dispatch => {
        return axios.get(`${API_BASE_URL}/conversations`).then(response => {
            dispatch({
                type: GET_CONVERSATIONS,
                payload: response.data
            });
        });
    }
}