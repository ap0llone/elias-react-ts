import React from "react";
import "../../../styles/pages/About.css";

interface Props {
    text: string;
}

const Fact: React.FC<Props> = ({ text }) => {
    return <h3 className="fact">{text}</h3>;
};

export default Fact;
