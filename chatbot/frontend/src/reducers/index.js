import { combineReducers } from 'redux'
import bot from "./bot"
import errors from "./errors"
import messages from './messages'
import auth from './auth'


export default combineReducers({
    bot,
    errors,
    messages,
    auth
});