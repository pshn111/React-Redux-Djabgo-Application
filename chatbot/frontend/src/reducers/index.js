import { combineReducers } from 'redux'
import bot from "./bot"
import errors from "./errors"


export default combineReducers({
    bot,
    errors
});