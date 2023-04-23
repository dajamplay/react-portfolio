import React from 'react';
import classes from './header.module.css';
import Nav from "./nav/Nav";
import Logo from "./logo/Logo";

const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.container + " _container"}>
                <div className={classes.logo}>
                    <Logo />
                </div>
                <div className={classes.nav}>
                    <Nav />
                </div>
            </div>
        </header>
    );
};

export default Header;