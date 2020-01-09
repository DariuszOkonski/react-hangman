import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/navigation/Navigation.component';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />

      </div>
    </BrowserRouter>
  );
}

export default App;
