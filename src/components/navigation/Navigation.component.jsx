import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (

    <nav className="navbar navbar-expand-sm navbar-dark bg-primary fixed-top">
      <div className="container">
        <NavLink className="navbar-brand" exact to="/">DazzDev</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/game">Game</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/about">About</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;