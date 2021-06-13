import React from 'react';
import axios from 'axios';
import QuestionsList from './questionsList.jsx';


class QuestionsAndAnswers extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount () {
        this.props.getQuestions()
    }

    render () {
    return (
        <div className="questionsAndAnswers">
            <h2>Questions and Answers</h2>
            <QuestionsList questions={this.props.questions}/>
        </div>
    )
    }
}


export default QuestionsAndAnswers;