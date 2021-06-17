import React from 'react'
import QuestionsList from './questionsList.jsx'
import moreAnswersButton from './moreAnswersButton.jsx'
import addQuestionsButton from './addQuestionsButton.jsx'
import QuestionSearchBar from './questionSearchBar.jsx'

const QuestionsAndAnswers = ({ questions, getQuestions, markQHelpful, markAHelpful }) => {
  const pathname = window.location.pathname.slice(1)

  if (questions.product_id !== pathname) {
    getQuestions(pathname)
  }

  return (
    <div className="questionsAndAnswers">
        <h2 className="headerQAndA">Questions and Answers</h2>
        <QuestionSearchBar/>
        <QuestionsList questions={questions.results} markQHelpful={markQHelpful} markAHelpful={markAHelpful}/>
        <div className="buttonsDiv">{moreAnswersButton} {addQuestionsButton}</div>
    </div>
  )
}

export default QuestionsAndAnswers
