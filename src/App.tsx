import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import MainPage from './pages/main/MainPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainPage />

      </div>
    </BrowserRouter>
  );
}

export default App;
