import React from 'react';
import './Error.styles.scss';
import { NavLink } from 'react-router-dom';

const Error = () => {
  return (
    <div className="error">
      <div className="jumbotron bg-danger text-white">
        <h1 className="display-4">!!! ERROR !!!</h1>
        <p className="lead">There is no such a page !!!</p>
        <hr className="my-4" />
        <NavLink className="btn btn-primary btn-sm mr-3" exact to="/" role="button">Home</NavLink>
        <NavLink className="btn btn-primary btn-sm mr-3" to="/game" role="button">Game</NavLink>
        <NavLink className="btn btn-primary btn-sm" to="/about" role="button">About</NavLink>
      </div>
    </div>
  );
}

export default Error;