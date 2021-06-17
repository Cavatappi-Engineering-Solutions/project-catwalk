import React from 'react'
import Answer from './answer.jsx'
import addAnswer from './addAnswer.jsx'

const Question = (props) => {
  return (
    <div className="question">
      <div className="questionBar">Q: {props.body} Helpful? <span className="helpful" onClick={() => props.markQHelpful(props.id)}> Yes({props.helpfulness})</span>&nbsp;&#124;&nbsp;{addAnswer}</div>
      <div className="answerBar"><Answer answers={props.answers} markQHelpful={props.markQHelpful} markAHelpful={props.markAHelpful}/></div>
    </div>
  )
}

export default Question
