import React from 'react';
import './RestartButton.styles.scss';

const RestartButton = ({ handleRestart }) => {
  return (
    <button onClick={handleRestart} className="restart-button">Restart?</button>
  );
}

export default RestartButton;