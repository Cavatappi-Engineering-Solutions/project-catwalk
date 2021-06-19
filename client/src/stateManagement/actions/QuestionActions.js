import axios from 'axios'

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
      url: `api/fec2/hrnyc/qa/questions/?product_id=${id}`
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
      url: `api/fec2/hrnyc/qa/questions/${id}/helpful`
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
      url: `api/fec2/hrnyc/qa/answers/${id}/helpful`
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
