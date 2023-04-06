import React from "react";

import github from "../../../assets/Header/github.svg";
import dribbble from "../../../assets/Header/dribbble.svg";
import figma from "../../../assets/Header/figma.svg";

const HeaderSocials: React.FC = () => {
    return (
        <div className="header__socials">
            <div className="line"></div>
            <div className="socials">
                <a className="socials__link" href="#!">
                    <img src={github} alt="Icon" />
                </a>
                <a className="socials__link" href="#!">
                    {" "}
                    <img src={dribbble} alt="Icon" />
                </a>
                <a className="socials__link" href="#!">
                    {" "}
                    <img src={figma} alt="Icon" />
                </a>
            </div>
        </div>
    );
};

export default HeaderSocials;
