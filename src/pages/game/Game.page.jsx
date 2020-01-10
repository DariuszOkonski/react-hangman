import React, { Component } from 'react';
import './Game.styles.scss';
import imagesArr from '../../utillities/images';
// import { randomWord } from '../../utillities/words';
import LeftSection from '../../components/left-section/LeftSection.component';
import AlphabetButtons from '../../components/alphabet-buttons/AlphabetButtons.component';
import RestartButton from '../../components/restart-button/RestartButton.component';
import NumberWrong from '../../components/number-wrong/NumberWrong.component';
import GuesseWord from '../../components/guesse-world/GuesseWord.component';

class Game extends Component {
  state = {
    numberWrong: 0,
    currentWord: 'plently',
    guesseWord: '-l---ly',
  }

  handleAlphabetButton = (letter) => {
    console.log(letter)
  }

  render() {
    const { numberWrong, guesseWord } = this.state;

    return (
      <div className="game">
        <LeftSection img={imagesArr[numberWrong]} />

        <section className="right">
          <NumberWrong numberWrong={numberWrong} />

          <GuesseWord guesseWord={guesseWord} />

          <AlphabetButtons handleAlphabetButton={this.handleAlphabetButton} />

          <RestartButton />
        </section>
      </div>
    );
  }
}

export default Game;