import { combineReducers } from 'redux'
import bot from "./bot"
import errors from "./errors"
import messages from './messages'


export default combineReducers({
    bot,
    errors,
    messages
});