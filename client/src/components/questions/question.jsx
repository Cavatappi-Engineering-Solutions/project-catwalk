import React from 'react'
import Answer from './answer.jsx'
import addAnswer from './addAnswer.jsx'

const Question = (props) => {
  return (
    <div className="question">
      <div className="questionBar"><span className="qText">Q</span>: {props.body} <span className="helpfulText">Helpful?</span> <span className="helpful" onClick={() => props.markQHelpful(props.id)}><span className="yes">Yes</span><span className="helpfulQuestionNumber">({props.helpfulness})</span></span>&nbsp;&#124;&nbsp;{addAnswer}</div>
      <div className="answerBar"><Answer answers={props.answers} markQHelpful={props.markQHelpful} markAHelpful={props.markAHelpful}/></div>
    </div>
  )
}

export default Question
