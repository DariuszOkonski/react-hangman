import React from 'react';
import './AlphabetButtons.styles.scss';
import uuid from 'uuid/v1';
import SingleButton from './single-button/SingleButton.component';

const AlphabetButtons = (props) => {

  return (
    <div className="alphabet-buttons">
      {
        props.alphabet.map(letter =>
          <SingleButton
            key={uuid()}
            letter={letter}
            handleAlphabetButton={props.handleAlphabetButton}
            clicked={false}
          />)
      }
    </div>
  );
}

export default AlphabetButtons;