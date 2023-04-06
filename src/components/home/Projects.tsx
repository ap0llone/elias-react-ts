import React from "react";
import "../../styles/Projects.css";
import ProjectItem from "./UI/ProjectItem";

import CardImg1 from "../../assets/Projects//img1.png";
import CardImg2 from "../../assets/Projects//img2.png";
import CardImg3 from "../../assets/Projects//img3.png";

interface Props {
    title: string;
    lang: string;
    img: any;
    text: string;
}

const Projects: React.FC<Props> = ({ title, lang, img, text }) => {
    return (
        <div className="projects">
            <div className="container">
                <div className="projects__content">
                    <div className="section__title">
                        <div>
                            <span>#</span>projects
                        </div>
                        <div className="section__line"></div>
                    </div>
                    <button className="projects__btn">View all ~~&gt;</button>
                </div>
                <div className="projects__list">
                    <ProjectItem
                        title={"ChertNodes"}
                        lang={"HTML SCSS PYTHON Flask"}
                        text={"Minecraft servers hosting "}
                        img={CardImg1}
                    />
                    <ProjectItem
                        title={"ProtectX"}
                        lang={"React Express Discord.js Node.js HTML SCSS PYTHON Flask"}
                        text={"Discord anti-crash bot"}
                        img={CardImg2}
                    />
                    <ProjectItem
                        title={"Kahoot Answers Viewer"}
                        lang={"CSS Express Node.js"}
                        text={"Get answers to your kahoot quiz"}
                        img={CardImg3}
                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;
