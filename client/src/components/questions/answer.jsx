import React from 'react';


const Answer = (props) => {
    const storage = []
    const answers = props.answers

    for (var key in answers) {
        storage.push(answers[key])
    }

    const list = <div>{storage.map((answer) => <div>{answer.body}</div>)}</div>
    const empty = <div>There are no answers!</div>

    return (
        <div>
            {Object.keys(answers).length === 0 ? empty : list}
        </div>
    )

}

export default Answer;