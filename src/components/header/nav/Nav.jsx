import React from 'react';
import classes from './nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <div className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/"
                         className={({ isActive, isPending }) =>
                             isPending ? "pending" : isActive ? classes.active : ""
                         }
                >Home</NavLink>
            </div>
        </div>
    );
};

export default Nav;