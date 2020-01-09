import React, { Component } from 'react';
import './Game.styles.scss';
import imagesArr from '../../utillities/images';
import LeftSection from '../../components/left-section/LeftSection.component';

class Game extends Component {
  state = {
    numberWrong: 0
  }

  render() {
    const { numberWrong } = this.state;

    return (
      <div className="game">
        <LeftSection img={imagesArr[numberWrong]} />

        <section className="right">
          right
        </section>
      </div>
    );
  }
}

export default Game;