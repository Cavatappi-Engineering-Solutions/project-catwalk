const questionsReducer = (questions = {}, action) => {
  switch (action.type) {
    case 'GET_QUESTIONS':
      return action.payload
    case 'MARK_QUESTION_HELPFUL':
      return action.payload
    case 'MARK_ANSWER_HELPFUL':
      return action.payload
    default:
      return questions
  }
}

export default questionsReducer
