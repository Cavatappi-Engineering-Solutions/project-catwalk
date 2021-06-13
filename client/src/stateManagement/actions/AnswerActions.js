const getAnswersForProduct = (data) => ({
    type: 'GET_ANSWERS',
    payload: data
})

const addAnswerForProduct = (text) => ({
    type: 'ADD_ANSWERS',
    payload: text
})

const markAnswerHelpful = (payload) => ({
    type: 'MARK_ANSWER_HELPFUL',
    payload: payload
})

const reportAnswer = (payload) => ({
    type: 'REPORT_ANSWER',
    payload: payload
})

export default { getAnswersForProduct, addAnswerForProduct, markAnswerHelpful, reportAnswer };