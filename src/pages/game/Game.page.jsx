import React, { Component } from 'react';
import { randomWord } from '../../utillities/words'
import './Game.styles.scss';
import imagesArr from '../../utillities/images';
import LeftSection from '../../components/left-section/LeftSection.component';
import AlphabetButtons from '../../components/alphabet-buttons/AlphabetButtons.component';
import RestartButton from '../../components/restart-button/RestartButton.component';
import NumberWrong from '../../components/number-wrong/NumberWrong.component';
import GuesseWord from '../../components/guesse-world/GuesseWord.component';
import alphabet from '../../utillities/alphabet.js';
import Result from '../../components/result/Result';

class Game extends Component {
  state = {
    numberWrong: 0,
    numberCorrect: 0,
    currentWord: randomWord(),
    guesseWord: '',
    alphabet: alphabet,
    endGame: false,
    resultText: '',
    restart: false
  }

  handleAlphabetButton = (letter, id) => {
    const index = this.state.currentWord.indexOf(letter);

    if (index !== -1) {
      this.replaceLetter(letter);

    } else {
      this.endGame();
      this.setState({ numberWrong: this.state.numberWrong + 1 });
    }

    this.blockUsedButton(id);
  }

  replaceLetter(letter) {
    let guesseWord = [...this.state.guesseWord];

    for (let i = 0; i < this.state.currentWord.length; i++) {
      if (this.state.currentWord[i] === letter)
        guesseWord.splice(i, 1, letter);
    }

    this.setState({
      guesseWord,
    })
  }

  endGame() {
    if (this.state.numberWrong === imagesArr.length - 2) {
      this.setState({
        endGame: true,
        resultText: 'You Lose!!!',
        guesseWord: this.state.currentWord
      })
    }
  }

  blockUsedButton(id) {
    let alphabet = [...this.state.alphabet];

    alphabet.forEach(el => {
      if (el.id === id)
        el.clicked = true;
    })

    this.setState({
      alphabet
    })
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

  handleRestart = () => {
    // window.location.reload();
    this.setState({
      numberWrong: 0,
      numberCorrect: 0,
      currentWord: randomWord(),
      guesseWord: '',
      endGame: false,
      resultText: '',
      restart: true,
    })
    // this.handleResetGuesseWord();
    this.resetAlphabet();
  }

  resetAlphabet() {
    let alphabet = [...this.state.alphabet];

    alphabet.forEach(el => {
      if (el.clicked)
        el.clicked = false;
    })

    this.setState({
      alphabet
    })
  }

  componentDidMount() {
    this.handleResetGuesseWord();
  }

  componentDidUpdate() {
    const current = [...this.state.currentWord];
    const guessed = [...this.state.guesseWord];

    if ((JSON.stringify(current) === JSON.stringify(guessed)) && !this.state.endGame) {
      this.setState({
        endGame: true,
        resultText: 'You Win!!!'
      })
    }

    if (this.state.restart) {
      this.handleResetGuesseWord();
      this.setState({
        restart: false,
      })
    }
  }

  render() {
    const { numberWrong, guesseWord } = this.state;

    return (
      <div className="game">
        <LeftSection img={imagesArr[numberWrong]} />

        <section className="right">
          <NumberWrong numberWrong={numberWrong} />

          <GuesseWord guesseWord={guesseWord} />

          {!this.state.endGame ?
            <AlphabetButtons
              handleAlphabetButton={this.handleAlphabetButton}
              alphabet={this.state.alphabet}
            /> :
            <Result>{this.state.resultText}</Result>
          }

          <RestartButton handleRestart={this.handleRestart} />
        </section>
      </div>
    );
  }
}

export default Game;