import React from 'react';
import './AlphabetButtons.styles.scss';
import uuid from 'uuid/v1';
import SingleButton from './single-button/SingleButton.component';

const AlphabetButtons = (props) => {

  return (
    <div className="alphabet-buttons">
      {
        props.alphabet.map(element =>
          <SingleButton
            key={element.id}
            handleAlphabetButton={props.handleAlphabetButton}
            {...element}
          />)
      }
    </div>
  );
}

export default AlphabetButtons;