import { GET_QUESTION } from '../actions/types.js'

const initalState = {
    question: []
}

export default function(state = initalState, action) {
    switch(action.type){
        case GET_QUESTION:
            return {
                ...state,
                question: action.payload
            };
        default:
            return state;
    }
}