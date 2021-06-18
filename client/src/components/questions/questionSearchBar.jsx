import React from 'react'

class QuestionSearchBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    this.setState({
      value: event.target.value
    })
  }

  render () {
    return (
      <input className="questionSearch" type="text" placeholder="Search for questions" value={this.state.value} onChange={this.handleChange}/>
    )
  }
}

export default QuestionSearchBar
