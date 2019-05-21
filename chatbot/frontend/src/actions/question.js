import axios from 'axios'

import { GET_QUESTION } from './types'

//Get question
export const getQuestion = () => dispatch => {
    axios.get('/api/question/')
    .then(res => {
        dispatch({
            type: GET_QUESTION,
            payload: res.data
        });
    }).catch(err => console.log(err));
}