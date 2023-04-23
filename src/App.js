import React from 'react';
import './app.css';
import Header from "./components/header/Header";
import Routing from "./routing/Routing";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <div className="wrapper">
            <div className="_container">
                <Header />
            </div>
            <div className="_container">
                <Routing />
            </div>
            <div className="_container">
                <Footer />
            </div>
        </div>
    );
}

export default App;
