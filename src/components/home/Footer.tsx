import React from "react";
import "../../styles/Footer.css";

import github from "../../assets/Header/github.svg";
import figma from "../../assets/Header/figma.svg";
import discord from "../../assets/Contacts/discord.svg";

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__container">
                    <div className="footer__content">
                        <div className="footer__logo">
                            <strong>
                                <div className="footer__name">
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
                                </div>{" "}
                                <span className="footer__email"> elias@elias-dev.ml</span>
                            </strong>
                        </div>
                        <div>
                            <p className="footer__text">Web designer and front-end developer</p>
                        </div>
                    </div>
                    <div className="footer__media">
                        <h4 className="footer__media-title">Media</h4>
                        <div className="footer__socials">
                            <a className="footer__socials-link" href="#!">
                                <img src={github} alt="Github" />
                            </a>
                            <a className="footer__socials-link" href="#!">
                                <img src={figma} alt="Figma" />
                            </a>
                            <a className="footer__socials-link" href="#!">
                                <img src={discord} alt="Discord" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer__bottom">© Copyright 2022. Made by Elias</div>
            </div>
        </footer>
    );
};

export default Footer;
