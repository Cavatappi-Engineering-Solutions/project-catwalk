import React from 'react'
import Question from './question.jsx'

const QuestionsList = (props) => (
  !props.questions
    ? <div className="questionsList">PLEASE WAIT</div>
    : <div className="questionsList">
        {props.questions.map((question) => <Question key={question.question_id} id={question.question_id} body={question.question_body} helpfulness={question.question_helpfulness} answers={question.answers} markQHelpful={props.markQHelpful} markAHelpful={props.markAHelpful}/>)}
    </div>
)

export default QuestionsList
