

const questionsReducer = (questions = [], action) => {
    switch (action.type) {
      case 'GET_QUESTIONS':
        return action.payload;
      default:
        return questions;
    }
  }
  
export default questionsReducer;