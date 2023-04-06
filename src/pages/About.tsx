import React from "react";
import "../styles/pages/About.css";

import Navbar from "../components/home/Navbar";
import HeaderSocials from "../components/home/UI/HeaderSocials";
import AboutImg from "../assets/About/aboutimg.png";
import FactsImg from "../assets/About/facts.png";
import SkillsItem from "../components/home/UI/SkillsItem";
import Fact from "../components/home/UI/Fact";
import Footer from "../components/home/Footer";

const About: React.FC = () => {
    return (
        <>
            <Navbar />
            <HeaderSocials />
            <div className="page">
                <div className="container">
                    <div className="page__content">
                        <h3 className="page__title">
                            <span>/</span>
                            about
                        </h3>
                        <p className="page__text">Who am i?</p>
                    </div>

                    <div className="about">
                        <div className="about__container">
                            <div className="about__content">
                                <p className="about__text">
                                    Hello, i’m Elias!
                                    <br />
                                    <br />
                                    I’m a self-taught front-end developer based in Kyiv, Ukraine. I
                                    can develop responsive websites from scratch and raise them into
                                    modern user-friendly web experiences.
                                    <br />
                                    <br />
                                    Transforming my creativity and knowledge into a websites has
                                    been my passion for over a year. I have been helping various
                                    clients to establish their presence online. I always strive to
                                    learn about the newest technologies and frameworks.
                                </p>
                            </div>
                            <div className="about__img">
                                <img src={AboutImg} alt="AboutImg" />
                            </div>
                        </div>
                    </div>

                    <div className="skills">
                        <h3 className="section__title" style={{ marginBottom: 48 }}>
                            <div>
                                <span>#</span>
                                skills
                            </div>
                        </h3>
                        <div className="skills-page__list">
                            <SkillsItem
                                title={"Languages"}
                                lang={"TypeScript Lua Python JavaScript"}
                            />
                            <SkillsItem title={"Other"} lang={"HTML CSS EJS SCSS REST Jinja"} />
                            <SkillsItem
                                title={"Tools"}
                                lang={
                                    "VSCode Neovim Linux Figma XFCE Arch Git Font Awesome KDE fish"
                                }
                            />
                            <SkillsItem title={"Databases"} lang={"SQLite PostgreSQL Mongo"} />
                            <SkillsItem
                                title={"Frameworks"}
                                lang={"React Vue Disnake Discord.js Flask Express.js"}
                            />
                        </div>
                    </div>

                    <div className="facts">
                        <h3 className="section__title" style={{ marginBottom: 48 }}>
                            <div>
                                <span>#</span>
                                my-fun-facts
                            </div>
                        </h3>
                        <div className="facts__container">
                            <div className="facts__list">
                                <Fact text={"I like winter more than summer"} />
                                <Fact text={"I often bike with my friends"} />
                                <Fact text={"I like pizza and pasta"} />
                                <Fact text={"I was in Egypt, Poland and Turkey"} />
                                <Fact text={"My favorite movie is The Green Mile"} />
                                <Fact text={"I am still in school"} />
                                <Fact text={"I don’t have any siblings"} />
                            </div>
                            <img className="facts__img" src={FactsImg} />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default About;
