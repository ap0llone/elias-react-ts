import React from "react";
import "../../styles/About.css";

import { BsArrowRight } from "react-icons/bs";
import AboutImg from "../../assets/About/aboutimg.png";

const AboutC: React.FC = () => {
    return (
        <section className="about">
            <div className="container">
                <div className="section__title">
                    <div>
                        <span>#</span>about-me
                    </div>
                    <div className="section__line"></div>
                </div>
                <div className="about__container">
                    <div className="about__content">
                        <p className="about__text">
                            <span className="about__text-span">Hello, i’m Elias!</span>
                            <br />
                            <br />
                            <span className="about__text-span">
                                I’m a self-taught front-end developer based in Kyiv, Ukraine. I can
                                develop responsive websites from scratch and raise them into modern
                                user-friendly web experiences.
                            </span>
                            <br />
                            <br />
                            <span className="about__text-span">
                                Transforming my creativity and knowledge into a websites has been my
                                passion for over a year. I have been helping various clients to
                                establish their presence online. I always strive to learn about the
                                newest technologies and frameworks.
                            </span>
                            <br />
                            <br />
                        </p>
                        <a className="about__btn" href="#!">
                            Read more <BsArrowRight />
                        </a>
                    </div>
                    <div className="about__img">
                        <img src={AboutImg} alt="AboutImg" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutC;
