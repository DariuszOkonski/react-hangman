import React from 'react';
import './SingleButton.styles.scss';

const SingleButton = ({ clicked, letter, id, handleAlphabetButton }) => {
  return (
    <div
      className={`single-button ${clicked && "marked"}`}
      onClick={!clicked ? () => handleAlphabetButton(letter, id) : null}
    >
      {letter}
    </div>
  );
}

export default SingleButton;