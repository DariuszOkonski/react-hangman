import React from 'react';
import './AlphabetButtons.styles.scss';
import uuid from 'uuid/v1';
import SingleButton from './single-button/SingleButton.component';
import alphabet from '../../utillities/alphabet';

const AlphabetButtons = () => {

  return (
    <div className="alphabet-buttons">
      {
        alphabet.map(letter => <SingleButton key={uuid()} letter={letter} />)
      }
    </div>
  );
}

export default AlphabetButtons;