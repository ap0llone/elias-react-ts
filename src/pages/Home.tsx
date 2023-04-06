import React, { useState } from "react";
import { Link } from "react-router-dom";

import Header from "../components/home/Header";
import Navbar from "../components/home/Navbar";
import ProjectsItem from "../components/home/UI/ProjectItem";
import Projects from "../components/home/Projects";
import Quote from "../components/home/Quote";
import Skills from "../components/home/Skills";
import About from "../components/home/About";
import Contacts from "../components/home/Contacts";

import { List } from "../types/types";
import Footer from "../components/home/Footer";

const Home = () => {
    const [title, setTitle] = useState<string>("");
    const [lang, setLang] = useState<string>("");
    const [text, setText] = useState<string>("");
    const [img, setImg] = useState();

    return (
        <>
            <Navbar />
            <Header />
            <Quote />
            <Projects title={title} lang={lang} text={text} img={img} />
            <Skills title={title} lang={lang} />
            <About />
            <Contacts />
            <Footer />
        </>
    );
};
export default Home;
