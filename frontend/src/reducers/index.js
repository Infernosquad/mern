import { combineReducers } from 'redux'
import conversationReducer from './conversationReducer'

export default combineReducers({
    conversations: conversationReducer
})