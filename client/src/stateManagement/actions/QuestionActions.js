import axios from 'axios'
import { API_KEY } from '../../../../config.js'

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

const markAnswerHelpful = (payload) => ({
  type: 'MARK_ANSWER_HELPFUL',
  payload: payload
})

export const retrieveQuestions = (id) => {
  return (dispatch) => {
    const options = {
      method: 'GET',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/qa/questions/?product_id=${id}`,
      headers: { Authorization: API_KEY }
    }
    return axios(options)
      .then(({ data }) => {
        dispatch(getQuestionsForProduct(data))
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export const markQHelpful = (id) => {
  return (dispatch) => {
    const options = {
      method: 'PUT',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/qa/questions/${id}/helpful`,
      headers: { Authorization: API_KEY }
    }
    return axios(options)
      .then(({ data }) => {
        dispatch(markQuestionHelpful(data))
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export const markAHelpful = (id) => {
  return (dispatch) => {
    const options = {
      method: 'PUT',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/qa/answers/${id}/helpful`,
      headers: { Authorization: API_KEY }
    }
    return axios(options)
      .then(({ data }) => {
        dispatch(markAnswerHelpful(data))
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
