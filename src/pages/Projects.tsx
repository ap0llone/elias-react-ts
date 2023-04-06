import React, { useState } from "react";
import "../styles/pages/Works.css";

import { Link } from "react-router-dom";
import Navbar from "../components/home/Navbar";
import HeaderSocials from "../components/home/UI/HeaderSocials";
import ProjectItem from "../components/home/UI/ProjectItem";
import CardImg1 from "../assets/Projects/img1.png";
import CardImg2 from "../assets/Projects/img2.png";
import CardImg3 from "../assets/Projects/img3.png";
import CardImg4 from "../assets/Projects/img4.png";
import CardImg5 from "../assets/Projects/img5.png";
import SmallProjectsCard from "../components/home/UI/SmallProjectsCard";
import Footer from "../components/home/Footer";

const Projects: React.FC = () => {
    const [lang, setLang] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [text, setText] = useState<string>("");
    const [btnText, setBtnText] = useState<string>("");

    return (
        <>
            <Navbar />
            <HeaderSocials />
            <div className="page">
                <div className="container">
                    <div className="page__content">
                        <h3 className="page__title">
                            <span>/</span>projects
                        </h3>
                        <p className="page__text">List of my projects</p>
                    </div>

                    <div className="complete-apps">
                        <h3 className="section__title" style={{ marginBottom: 48 }}>
                            <div>
                                <span>#</span>
                                complete-apps
                            </div>
                        </h3>
                        <div className="projects__list">
                            <ProjectItem
                                title={"ChertNodes"}
                                lang={"HTML SCSS PYTHON Flask"}
                                text={"Minecraft servers hosting "}
                                img={CardImg1}
                            />
                            <ProjectItem
                                title={"Kahoot Answers Viewer"}
                                lang={"CSS Express Node.js"}
                                text={"Get answers to your kahoot quiz"}
                                img={CardImg3}
                            />
                            <ProjectItem
                                title={"ProtectX"}
                                lang={"React Express Discord.js Node.js HTML SCSS PYTHON Flask"}
                                text={"Discord anti-crash bot"}
                                img={CardImg2}
                            />
                        </div>
                        <br />
                        <br />
                        <div className="projects__list">
                            <ProjectItem
                                title={"Kotik Bot"}
                                lang={"HTML CSS JS"}
                                text={"Multi-functional discord bot"}
                                img={CardImg4}
                            />
                            <ProjectItem
                                title={"Portfolio"}
                                lang={"Vue TS Less"}
                                text={"You’re using it rn"}
                                img={CardImg5}
                            />
                        </div>
                    </div>

                    <div className="small-projects">
                        <h3 className="section__title" style={{ marginBottom: 48 }}>
                            <div>
                                <span>#</span>
                                small-projects
                            </div>
                        </h3>
                        <div className="projects__list">
                            <SmallProjectsCard
                                lang={"Discord.js JS"}
                                title={"Bot boilerplate"}
                                text={
                                    "Start creating scalable discord.js bot with typescript in seconds"
                                }
                                btnText={"Github <~>"}
                            />
                            <SmallProjectsCard
                                lang={"VUE CSS JS"}
                                title={"My blog"}
                                text={"Front-end of my future blog website written in vue"}
                                btnText={"Github <~>"}
                            />
                            <SmallProjectsCard
                                lang={"Figma"}
                                title={"Chess pro"}
                                text={
                                    "Figma landing page about service for viewing chess tournaments"
                                }
                                btnText={"Figma <~>"}
                            />
                        </div>
                        <br />
                        <div className="projects__list">
                            <SmallProjectsCard
                                lang={"Figma"}
                                title={"Crash protect website"}
                                text={
                                    "Figma template for website about anti-raid, anti-crash discord bot"
                                }
                                btnText={"Figma <~>"}
                            />
                            <SmallProjectsCard
                                lang={"HTML CSS"}
                                title={"CSS expirements"}
                                text={"Collection of my different little projects in css"}
                                btnText={"Live <~>"}
                            />
                            <SmallProjectsCard
                                lang={"Lua NeoVim"}
                                title={"Web Dev nvim config"}
                                text={"Config for neovim perfect for web developer"}
                                btnText={"Github <~>"}
                            />
                        </div>
                        <br />
                        <div className="projects__list">
                            <SmallProjectsCard
                                lang={"Python Quart HTML"}
                                title={"Ooku"}
                                text={"Simple link shortener with auth"}
                                btnText={"Live <~>"}
                            />
                            <SmallProjectsCard
                                lang={"Figma"}
                                title={"School website"}
                                text={"Figma template website for my school"}
                                btnText={"Figma <~>"}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Projects;
