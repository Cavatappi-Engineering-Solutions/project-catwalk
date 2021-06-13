const answersReducer = (answers = [], action) => {
    switch (action.type) {
      case 'GET_ANSWERS':
        return action.payload;
      default:
        return answers;
    }
  }
  
export default answersReducer;