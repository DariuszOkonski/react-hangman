import React, { Component } from 'react';
import './Game.styles.scss';
import imagesArr from '../../utillities/images';
// import { randomWord } from '../../utillities/words';
import LeftSection from '../../components/left-section/LeftSection.component';
import AlphabetButtons from '../../components/alphabet-buttons/AlphabetButtons.component';
import RestartButton from '../../components/restart-button/RestartButton.component';

class Game extends Component {
  state = {
    numberWrong: 0,
    currentWord: 'plently',
    guessedWord: '-l---ly',
  }

  render() {
    const { numberWrong, currentWord, guessedWord } = this.state;

    return (
      <div className="game">
        <LeftSection img={imagesArr[numberWrong]} />

        <section className="right">
          <h6>Number wrong: {numberWrong}</h6>

          <h4>{guessedWord}</h4>

          <AlphabetButtons />

          <RestartButton />
        </section>
      </div>
    );
  }
}

export default Game;