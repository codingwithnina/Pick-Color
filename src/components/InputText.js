import React, { Component } from "react";

class InputText extends Component {
  constructor() {
    super()
    this.state = {
      textInput: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }
  
  render() {
    return (
    <form class="inputbox">
      <input
        type="text"
        maxlength="30" 
        value={this.state.textInput}
        name ="textInput" 
        placeholder="Napisi tekst ovdje" onChange={this.handleChange} 
        />
      <h1>{this.state.textInput}</h1>
    </form>
    );
  }
}

export default InputText;