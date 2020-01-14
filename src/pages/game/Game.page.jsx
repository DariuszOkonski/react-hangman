import React, { Component } from 'react';
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
    currentWord: 'plently',
    guesseWord: '',
    alphabet: alphabet,
    endGame: false,
  }

  handleAlphabetButton = (letter, id) => {

    console.log(this.state.currentWord.indexOf(letter));

    if (this.state.currentWord.indexOf(letter) !== -1) {
      console.log('znalazl')
    } else {
      this.endGame();

      this.setState({ numberWrong: this.state.numberWrong + 1 });
    }

    this.blockUsedButton(id);
  }

  endGame() {
    if (this.state.numberWrong === imagesArr.length - 2) {
      this.setState({
        endGame: true,
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

          {!this.state.endGame ?
            <AlphabetButtons
              handleAlphabetButton={this.handleAlphabetButton}
              alphabet={this.state.alphabet}
            /> :
            <Result>You Lose!!!</Result>
          }

          <RestartButton />
        </section>
      </div>
    );
  }
}

export default Game;