import { combineReducers } from 'redux'
import conversationReducer from './conversationReducer'
import userReducer from "./userReducer";
import loadingReducer from "./loadingReducer";

export default combineReducers({
    loading: loadingReducer,
    conversations: conversationReducer,
    user: userReducer
})