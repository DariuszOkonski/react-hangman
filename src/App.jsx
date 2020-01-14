import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './components/navigation/Navigation.component';
import Footer from './components/footer/Footer.component';
import Game from './pages/game/Game.page';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Error from './pages/error/Error.page';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App container">
        <Navigation />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/game">
            <Game />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route>
            <Error />
          </Route>
        </Switch>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
