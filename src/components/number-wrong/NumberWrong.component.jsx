import React from 'react';
import './NumberWrong.styles.scss';

const NumberWrong = (props) => {
  return (
    <p className="number-wrong">Number wrong: {props.numberWrong}</p>
  );
}

export default NumberWrong;