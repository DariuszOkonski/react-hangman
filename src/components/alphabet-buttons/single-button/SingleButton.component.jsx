import React from 'react';
import './SingleButton.styles.scss';

const SingleButton = (props) => {
  return (
    <div
      className={`single-button ${props.clicked && "marked"}`}
      onClick={!props.clicked ? () => props.handleAlphabetButton(props.letter) : null}
    >
      {props.letter}
    </div>
  );
}

export default SingleButton;