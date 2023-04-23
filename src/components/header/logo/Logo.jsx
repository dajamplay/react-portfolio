import React from 'react';
import classes from './logo.module.css';
import {NavLink} from "react-router-dom";

const Logo = () => {
    return (
        <div className={classes.logo}>
            <NavLink to="/" className={classes.link}>Maksim Aksenov</NavLink>
        </div>
    );
};

export default Logo;