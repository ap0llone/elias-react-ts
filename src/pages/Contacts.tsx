import React from "react";
import "../styles/pages/Contacts.css";
import Navbar from "../components/home/Navbar";
import discord from "../assets/Contacts/discord.svg";
import email from "../assets/Contacts/email.svg";
import twitter from "../assets/Contacts/twitter.svg";
import HeaderSocials from "../components/home/UI/HeaderSocials";
import Footer from "../components/home/Footer";

const Contacts: React.FC = () => {
    return (
        <>
            <Navbar />
            <HeaderSocials />
            <div className="page">
                <div className="container">
                    <div className="page__content">
                        <h3 className="page__title">
                            <span>/</span>contacts
                        </h3>
                        <p className="page__text">Who am i?</p>
                    </div>

                    <div className="contacts__container">
                        <p className="contacts__text">
                            I’m interested in freelance opportunities. However, if you have other
                            request or question, don’t hesitate to contact me
                        </p>

                        <div className="contacts__contacts">
                            <div className="contacts__item">
                                <h3 className="item__title">Support me here</h3>
                                <p className="item__text">4149500120690030</p>
                            </div>
                            <div className="contacts__item">
                                <h3 className="item__title">Message me here</h3>
                                <div className="item__social">
                                    <div className="social__item">
                                        <img src={discord} alt="DiscordIcon" />
                                        <p className="item__text">Elias#1234</p>
                                    </div>
                                    <div className="social__item">
                                        <img src={email} alt="DiscordIcon" />
                                        <p className="item__text">elias@elias-dev.ml</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="media">
                        <h3 className="section__title" style={{ marginBottom: 48 }}>
                            <div>
                                <span>#</span>
                                all-media
                            </div>
                        </h3>

                        <div className="media__list">
                            <div className="media__item">
                                <img src={twitter} alt="TwitterIcon" />
                                <p className="item__text">@elias</p>
                            </div>
                            <div className="media__item">
                                <img src={twitter} alt="TwitterIcon" />
                                <p className="item__text">@elias</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Contacts;
