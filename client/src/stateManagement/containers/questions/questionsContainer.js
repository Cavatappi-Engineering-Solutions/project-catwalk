import { connect } from 'react-redux';
import QuestionsAndAnswers from '../../../components/questions/questionsAndAnswers.jsx';
import { retrieveQuestions }from '../../actions/QuestionActions.js';

const mapStateToProps = (state) => ({
    questions: state.questions
})

const mapDispatchToProps = (dispatch) => ({
    getQuestions: () => {
        dispatch(retrieveQuestions())
    }
})

const QuestionsAndAnswersContainer = connect(mapStateToProps, mapDispatchToProps)(QuestionsAndAnswers)

export default QuestionsAndAnswersContainer;
