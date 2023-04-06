import React from "react";
import "../../styles/Header.css";
import { Link } from "react-router-dom";
import HeaderImg from "../../assets/Header/header-img.png";
import github from "../../assets/Header/github.svg";
import dribbble from "../../assets/Header/dribbble.svg";
import figma from "../../assets/Header/figma.svg";
import HeaderSocials from "./UI/HeaderSocials";

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__container">
                    <div className="header__content">
                        <h3 className="header__title">
                            Elias is a <span>web designer</span> and{" "}
                            <span>front-end developer</span>
                        </h3>
                        <p className="header__text">
                            He crafts responsive websites where technologies meet creativity
                        </p>
                        <Link to="/contacts" className="header__btn">
                            Contact me !!
                        </Link>
                    </div>
                    <div className="header__img">
                        <img src={HeaderImg} alt="Header-Img" />
                        <p className="header__img-subtitle">
                            <div className="header__cube"></div>
                            Currently working on Portfolio{" "}
                        </p>
                    </div>
                </div>
            </div>
            <HeaderSocials />
        </header>
    );
};

export default Header;
