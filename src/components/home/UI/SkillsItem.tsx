import React from "react";

interface Props {
    title: string;
    lang: string;
}

const SkillsItem: React.FC<Props> = ({ title, lang }) => {
    return (
        <div className="skills__card" style={{ height: "max-content" }}>
            <h3 className="skills__card-title">{title}</h3>
            <p className="skills__card-text">{lang}</p>
        </div>
    );
};

export default SkillsItem;
