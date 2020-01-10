import React, { Component } from 'react';
import './SingleButton.styles.scss';

class SingleButton extends Component {
  state = {
    clicked: false
  }

  handleClick = () => {
    this.props.handleAlphabetButton(this.props.letter)

    this.setState({ clicked: true });
  }

  render() {
    return (
      <div
        className={`single-button ${this.state.clicked && "marked"}`}
        onClick={!this.state.clicked ? this.handleClick : null}
      >
        {this.props.letter}
      </div>
    );
  }
}

export default SingleButton;