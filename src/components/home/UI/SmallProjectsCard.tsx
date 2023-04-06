import React from "react";

interface Props {
    lang: string;
    title: string;
    text: string;
    btnText: string;
}

const SmallProjectsCard: React.FC<Props> = ({ lang, title, text, btnText }) => {
    return (
        <div className="small-projects__card">
            <div className="projects__card-languages">
                <p className="languages__text">{lang}</p>
            </div>
            <div className="projects__card-content">
                <h4 className="projects__card-title">{title}</h4>
                <p className="small-projects__card-text">{text}</p>
                <div className="projects__card-btns">
                    <a className="card-btn-primary" href="#!">
                        {btnText}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SmallProjectsCard;
