import React, { Component } from 'react';
import './Game.styles.scss';
import img0 from '../../utillities/img/0.jpg';
import LeftSection from '../../components/left-section/LeftSection.component';

class Game extends Component {
  state = {
    currentImg: img0
  }

  render() {
    const { currentImg } = this.state;

    return (
      <div className="game">
        <LeftSection img={currentImg} />

        <section className="right">
          right
        </section>
      </div>
    );
  }
}

export default Game;