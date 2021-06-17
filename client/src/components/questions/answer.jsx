import React from 'react'

class Answer extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      reported: false
    }

    this.handleReportClick = this.handleReportClick.bind(this)
  }

  handleReportClick () {
    this.setState({
      reported: true
    })
  }

  render () {
    const storage = []
    const answers = this.props.answers

    for (const key in answers) {
      storage.push(answers[key])
    }

    const array = storage.map((answer) => <div className="answer"key={answer.id}>A: {answer.body} <br></br> <div className="underbar"> by {answer.answerer_name}, {answer.date.slice(0, 10)} &#124; Helpful? <span className="helpful" onClick={() => this.props.markAHelpful(answer.id)}> Yes({answer.helpfulness})</span> &#124; <span className="report" onClick={this.handleReportClick}>{this.state.reported ? 'Reported' : 'Report'}</span></div></div>)

    const empty = <div>There are no answers!</div>

    const first = <div className="firstAnswer">{array[0]}</div>

    return (
         <div>
            {Object.keys(answers).length === 0 ? empty : first}
         </div>
    )
  }
}

export default Answer
