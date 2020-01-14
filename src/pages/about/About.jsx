import React from 'react';
import './About.styles.scss';

const About = () => {
  return (
    <div className="about">
      <div className="card text-white">
        <div className="card-header bg-secondary">
          About Hangman App
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item bg-primary">Version: 1.0.0</li>
          <li className="list-group-item bg-primary">Author: Dariusz Okonski</li>
          <li className="list-group-item bg-primary">Year: 2020</li>
        </ul>
      </div>
    </div>
  );
}

export default About;