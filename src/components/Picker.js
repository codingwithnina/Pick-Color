import React, { Component } from "react"
import axios from "axios";

class Picker extends Component {
  constructor() {
    super();
    this.state = {
      colors: []
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    const {colors, value} = event.target
    this.setState({
      [colors]: value
    })
  }
 
  componentDidMount() {
    this.fetchColor();
  }

  fetchColor = () => {
    axios.get('http://www.colr.org/json/color/random')
      .then((response) => {
        const { colors } = response.data;
        this.setState({colors: colors[0].hex})
      })
  }

  render() {
    const colors = this.state.colors;
    return (
      <div>
      <p>{colors.hex}</p>
      <button onClick={this.handleClick}>Change</button>
      </div>
    );
  }
}

export default Picker;