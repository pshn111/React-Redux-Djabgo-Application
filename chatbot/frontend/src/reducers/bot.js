import { GET_USERS } from '../actions/types.js'

const initalState = {
    users: []
}

export default function(state = initalState, action) {
    switch(action.type){
        case GET_USERS:
            return {
                ...state,
                users: action.payload
            };
        default:
            return state;
    }
}