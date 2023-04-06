import React from "react";
import CardImg1 from "../../assets/Projects/img1.png";
import { List } from "../../../types/types";

interface Props {
    title: string;
    lang: string;
    text: string;
    img: any;
}

const ProjectItem: React.FC<Props> = ({ title, lang, text, img }) => {
    return (
        <div className="projects__card">
            <img className="projects__card-img" src={img} alt="CardImg" />
            <div className="projects__card-languages">
                <p className="languages__text">{lang}</p>
            </div>
            <div className="projects__card-content">
                <h4 className="projects__card-title">{title}</h4>
                <p className="projects__card-text">{text}</p>
                <div className="projects__card-btns">
                    <a className="card-btn-primary" href="#!">
                        Live &lt;~&gt;
                    </a>
                    <a className="card-btn-secondary" href="#!">
                        Cached &gt;=
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectItem;
