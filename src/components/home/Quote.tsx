import React from "react";
import "../../styles/Quote.css";

const Quote: React.FC = () => {
    return (
        <div className="quote">
            <div className="quote__container">
                <div className="quote__box">
                    <h3 className="quote__title">With great power comes great electricity bill</h3>
                </div>
                <div className="quote__author">
                    <h3 className="author__title">- Dr. Who</h3>
                </div>
            </div>
        </div>
    );
};

export default Quote;
