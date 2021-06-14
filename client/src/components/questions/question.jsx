import React from 'react';
import Answer from './answer.jsx';
import helpfulTag from './helpfulness.jsx'
import addAnswer from './addAnswer.jsx';

const Question = (props) => (
    <div className="question">
        <div>Q: {props.name} Helpful? Yes({helpfulTag(props.helpfulness)}) | {addAnswer()}</div>
        <div>A: <Answer answers={props.answers}/> </div>
    </div>
)


export default Question;