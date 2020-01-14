import React, { Component } from 'react';
import './Game.styles.scss';
import imagesArr from '../../utillities/images';
// import { randomWord } from '../../utillities/words';
import LeftSection from '../../components/left-section/LeftSection.component';
import AlphabetButtons from '../../components/alphabet-buttons/AlphabetButtons.component';
import RestartButton from '../../components/restart-button/RestartButton.component';
import NumberWrong from '../../components/number-wrong/NumberWrong.component';
import GuesseWord from '../../components/guesse-world/GuesseWord.component';
import alphabet from '../../utillities/alphabet.js';

class Game extends Component {
  state = {
    numberWrong: 0,
    currentWord: 'plently',
    guesseWord: '',
    alphabet: []
  }

  handleAlphabetButton = (letter) => {
    console.log(letter)

    console.log(this.state.currentWord.indexOf(letter));

    if (this.state.currentWord.indexOf(letter) !== -1) {
      console.log('znalazl')
    } else {
      console.log('nie znalazł');
      this.setState({ numberWrong: this.state.numberWrong + 1 });
    }
  }

  handleResetGuesseWord() {
    let tempGuesseWord = '';
    for (let i = 0; i < this.state.currentWord.length; i++) {
      tempGuesseWord += '-';
    }

    this.setState({
      guesseWord: tempGuesseWord
    })
  }

  componentDidMount() {
    this.handleResetGuesseWord();
  }

  render() {
    const { numberWrong, guesseWord } = this.state;

    return (
      <div className="game">
        <LeftSection img={imagesArr[numberWrong]} />

        <section className="right">
          <NumberWrong numberWrong={numberWrong} />

          <GuesseWord guesseWord={guesseWord} />

          {/* <AlphabetButtons handleAlphabetButton={this.handleAlphabetButton} /> */}

          <RestartButton />
        </section>
      </div>
    );
  }
}

export default Game;