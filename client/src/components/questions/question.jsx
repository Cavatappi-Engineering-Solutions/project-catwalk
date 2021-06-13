import React from 'react';
import Answer from './answer.jsx';

const Question = (props) => (
    <div className="question">
        <div>Q: {props.name} Helpful? {props.helpfulness}</div>
        <div>A: <Answer answers={props.answers}/> </div>
    </div>
)


export default Question;