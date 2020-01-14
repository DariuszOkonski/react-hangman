import React from 'react';
import './Home.scss';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <div className="jumbotron bg-secondary text-white">
        <h1 className="display-4">Hangman</h1>
        <p className="lead">Let's play hangman game</p>
        <hr className="my-4" />
        <NavLink className="btn btn-primary btn-sm mr-3" to="/game" role="button">Game</NavLink>
        <NavLink className="btn btn-primary btn-sm" to="/about" role="button">About</NavLink>
      </div>
    </div>
  );
}

export default Home;