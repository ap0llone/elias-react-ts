import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Projects from "./pages/Projects";

import "./styles/media.css";

const App: React.FC = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" Component={Home} />
                    <Route path="/projects" Component={Projects} />
                    <Route path="/about" Component={About} />
                    <Route path="/contacts" Component={Contacts} />
                </Routes>
            </Router>
        </>
    );
};

export default App;
