import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/frames/Header';
import SearchBar from './components/commons/SearchBar';
import "./styles/commons/searchBar.css"
import BottomMenu from './components/frames/BottomMenu';
import "./styles/commons/bottomMenu.css"
import EvBanner from './components/EvBanner';
import "./styles/commons/evBanner.css"
import Category from './components/commons/Category';
import Rank from './components/Rank';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Header />
          <SearchBar />
        </div>
        <div>
          <br />
          <EvBanner />
        </div>
        <div>
        <br />
          <Category />
        </div>
        <div>
          <Rank />
        </div>
        <div>
          <BottomMenu />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
