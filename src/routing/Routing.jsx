import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../pages/home/Home";
import Projects from "../pages/projects/Projects";
import Contacts from "../pages/contacts/Contacts";

const Routing = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/projects" element={<Projects />}/>
                <Route path="/contacts" element={<Contacts />}/>
            </Routes>
        </>
    );
};

export default Routing;