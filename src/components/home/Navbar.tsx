import React, { useState } from "react";
import "../../styles/Navbar.css";
import { Link } from "react-router-dom";

import burger from "../../assets/Navbar/burger.svg";
import close from "../../assets/Navbar/close.svg";

const Navbar: React.FC = () => {
    const [nav, setNav] = useState<boolean>(false);
    const [color, setColor] = useState<boolean>(false);

    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true);
        } else {
            setColor(false);
        }
    };

    window.addEventListener("scroll", changeColor);

    const openNav = () => {
        setNav(!nav);
    };

    return (
        <nav className={color ? "nav sticky" : "nav"}>
            <div className="container">
                <div className="nav__container">
                    <Link to="/" className="nav__logo">
                        <svg
                            width="16"
                            height="17"
                            viewBox="0 0 16 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M12 0.5H8V4.5H4H0V8.5V12.5V16.5H4H8V12.5H12H16V8.5V4.5V0.5H12ZM4 12.5H8V8.5H12V4.5H8V8.5H4V12.5Z"
                                fill="white"
                            />
                        </svg>
                        Elias
                    </Link>
                    <div className="nav__burger" onClick={openNav}>
                        <img src={nav ? close : burger} alt="Burger" />
                    </div>

                    <div className={nav ? "nav__menu active" : "nav__menu"}>
                        <Link to="/" className="nav__link nav__active">
                            <span>#</span>home
                        </Link>
                        <Link to="/projects" className="nav__link">
                            <span>#</span>works
                        </Link>
                        <Link to="/about" className="nav__link">
                            <span>#</span>about-me
                        </Link>
                        <Link to="/contacts" className="nav__link">
                            <span>#</span>contacts
                        </Link>

                        <select className="nav__select">
                            <option selected>EN</option>
                            <option>RU</option>
                            <option>UA</option>
                        </select>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
