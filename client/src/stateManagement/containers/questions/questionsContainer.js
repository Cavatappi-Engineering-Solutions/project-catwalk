import { connect } from 'react-redux'
import QuestionsAndAnswers from '../../../components/questions/questionsAndAnswers.jsx'
import { retrieveQuestions, markQHelpful, markAHelpful } from '../../actions/QuestionActions.js'

const mapStateToProps = (state) => ({
  questions: state.questions
})

const mapDispatchToProps = (dispatch) => ({
  getQuestions: (id) => {
    dispatch(retrieveQuestions(id))
  },
  markQHelpful: (id) => {
    dispatch(markQHelpful(id))
  },
  markAHelpful: (id) => {
    dispatch(markAHelpful(id))
  }
})

const QuestionsAndAnswersContainer = connect(mapStateToProps, mapDispatchToProps)(QuestionsAndAnswers)

export default QuestionsAndAnswersContainer
