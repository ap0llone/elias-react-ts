import React from "react";
import "../../styles/Skills.css";

import skillsimg from "../../assets/Skills/skillsimg.png";
import SkillsItem from "./UI/SkillsItem";

interface Props {
    title: string;
    lang: string;
}

const Skills: React.FC<Props> = ({ title, lang }) => {
    return (
        <section className="skills">
            <div className="container">
                <div className="section__title" style={{ paddingBottom: "15px" }}>
                    <div>
                        <span>#</span>skills
                    </div>
                    <div className="section__line"></div>
                </div>
                <div className="skills__container">
                    <div className="skills__img">
                        <img src={skillsimg} />
                    </div>
                    <div className="skills__list">
                        <SkillsItem title={"Languages"} lang={"TypeScript Lua Python JavaScript"} />
                        <SkillsItem title={"Databases"} lang={"SQLite PostgreSQl Mongo"} />
                        <SkillsItem
                            title={"Tools"}
                            lang={"VSCode Neovim Linux Figma XFCE Arch Git Font Awesome"}
                        />
                        <SkillsItem title={"Other"} lang={"HTML CSS EJS SCSS REST Jinja "} />
                        <SkillsItem
                            title={"Frameworks"}
                            lang={"React Vue Disnake Discord.js Flask Express.js"}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
