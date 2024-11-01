import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={"/"} element={<MainPage/>}/>
                <Route path={"/login.me"} element={<LoginPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
