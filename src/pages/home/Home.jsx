import React from 'react';
import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      <div className="jumbotron bg-secondary text-white">
        <h1 className="display-4">Hangman</h1>
        <p className="lead">Let's play hangman game</p>
        <hr className="my-4" />
        <a className="btn btn-primary btn-sm mr-3" href="#" role="button">Game</a>
        <a className="btn btn-primary btn-sm" href="#" role="button">About</a>
      </div>
    </div>
  );
}

export default Home;