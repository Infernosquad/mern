import {START_LOADER,END_LOADER} from "../actions/loadingActions";

const initialState = {
    loading: false,
    error: null
}

export default function(state = initialState, action){
    switch (action.type) {
        case START_LOADER:
            return {...state,loading: true};
        case END_LOADER:
            return {...state,loading: false,error:action.payload};
        default:
            return state;
    }
}
