import axios from 'axios';
import { API_KEY } from '../../../../config.js';

const getQuestionsForProduct = (data) => ({
    type: 'GET_QUESTIONS',
    payload: data
})

const addQuestionForProduct = (text) => ({
    type: 'ADD_QUESTION',
    payload: text
})

const markQuestionHelpful = (payload) => ({
    type: 'MARK_QUESTION_HELPFUL',
    payload: payload
})

const reportQuestion = (payload) => ({
    type: 'REPORT_QUESTION',
    payload: payload
})

export const retrieveQuestions = () => {
    return (dispatch) => {
        const options = {
            method: 'GET',
            url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/qa/questions/?product_id=11002',
            headers: { 'Authorization': API_KEY }
        }
    return axios(options)
            .then(({ data }) => {
                dispatch(getQuestionsForProduct(data.results))
            })
            .catch((error) => {
                console.log(error)
            })
    }
}
