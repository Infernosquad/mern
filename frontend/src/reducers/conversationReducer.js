import {GET_CONVERSATIONS} from "../actions/conversationActions";

const initialState = {
    conversations:[],
    loading:true
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_CONVERSATIONS:
            return {
                ...state,
                conversations: action.payload,
                loading:false
            }
        default: return state
    }
}