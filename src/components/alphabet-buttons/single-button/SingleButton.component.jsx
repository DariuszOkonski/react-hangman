import React from 'react';
import './SingleButton.styles.scss';

const SingleButton = (props) => {
  return (
    <div className="single-button">
      {props.letter}
    </div>
  );
}

export default SingleButton;