import React, { Component } from 'react';
import './Game.styles.scss';
import imagesArr from '../../utillities/images';
// import { randomWord } from '../../utillities/words';
import LeftSection from '../../components/left-section/LeftSection.component';
import AlphabetButtons from '../../components/alphabet-buttons/AlphabetButtons.component';
import RestartButton from '../../components/restart-button/RestartButton.component';
import NumberWrong from '../../components/number-wrong/NumberWrong.component';

class Game extends Component {
  state = {
    numberWrong: 0,
    currentWord: 'plently',
    guesseWord: '-l---ly',
  }

  render() {
    const { numberWrong, guesseWord } = this.state;

    return (
      <div className="game">
        <LeftSection img={imagesArr[numberWrong]} />

        <section className="right">
          <NumberWrong numberWrong={numberWrong} />

          <h4>{guesseWord}</h4>

          <AlphabetButtons />

          <RestartButton />
        </section>
      </div>
    );
  }
}

export default Game;