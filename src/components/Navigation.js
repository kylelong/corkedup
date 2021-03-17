import React, { useState } from 'react';
import Logo from './Logo';
import '../styles/Navigation.css';
import { Link } from 'react-router-dom';
const Navigation = () => {
    //onclick menu shows
    /*
    Events
    Savings
    Recipes

    --------
    Profile
    Logout
     */
    const [buttonText, setButtonText] = useState("Menu");
    const clickedButton = () => {
        buttonText === "Menu" ? setButtonText("X Menu") : setButtonText("Menu");
    }
    return (
        <div className="navContainer">
            <button className="button is-info is-light is-small" id="menuButton" onClick={clickedButton}>{buttonText}</button> 
            <Logo />
            <ul className="navbarMenu">
                <Link to="/account">
                <li>
                   Account
                </li>
                </Link>
                <Link to="/">
                <li>
                    Logout
                </li>
                </Link>
            </ul>
            <ul className="desktopMenu">
                            <Link to="/events">
                                <li>
                                    Events
                                </li>
                            </Link>

                            <Link to="/savings">
                                <li>
                                    Savings
                                </li>
                            </Link>

                           <Link to="/recipes">
                                <li>
                                    Recipes
                                </li>
                            </Link>
                </ul>

            {buttonText === "X Menu" &&
                <ul className="mobileMenu">
                            <Link to="/events">
                                <li>
                                    Events
                                </li>
                            </Link>

                            <Link to="/savings">
                                <li>
                                    Savings
                                </li>
                            </Link>

                           <Link to="/recipes">
                                <li>
                                    Recipes
                                </li>
                            </Link>

                            <br />

                           <Link to="/account">
                                <li>
                                    Account
                                </li>
                            </Link>

                            <Link to="/">
                                <li>
                                    Logout
                                </li>
                            </Link>
                </ul>
            }

        </div>
    );
};

export default Navigation;