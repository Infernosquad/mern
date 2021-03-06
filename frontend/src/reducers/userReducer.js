import {LOGIN_USER} from "../actions/userActions";

const initialState = {
    currentUser: null
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_USER:
            return {...state, currentUser: action.payload}
        default:
            return state;
    }
}
