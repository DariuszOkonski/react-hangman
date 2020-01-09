import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/navigation/Navigation.component';
import Footer from './components/footer/Footer.component';
import Game from './pages/game/Game.page';

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <Navigation />

        <Game />

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
