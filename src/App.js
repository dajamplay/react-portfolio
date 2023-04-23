import React from 'react';
import './app.css';
import Header from "./components/header/Header";
import Home from "./components/pages/home/Home";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className="wrapper">

            <div className="app__header__wrapper">
                <Header />
            </div>

            <div className="app__content__wrapper">
                <Routes>
                    <Route path="/" element={<Home />}/>
                </Routes>
            </div>

        </div>
    );
}

export default App;
