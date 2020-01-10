import React from 'react';
import './GuesseWord.styles.scss';

const GuesseWord = (props) => {
  return (
    <h4 className="guesse-world">{props.guesseWord}</h4>
  );
}

export default GuesseWord;