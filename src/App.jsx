import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/navigation/Navigation.component';
import Footer from './components/footer/Footer.component';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />

        <h1>Hello world</h1>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
