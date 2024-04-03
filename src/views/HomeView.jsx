import React from "react";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Site from "../components/Site";

const HomeView = () => {
    return (
    <>
        <Header />
        <Main>
            <Intro />
            <Site />
            <Contact />
        </Main>
        <Footer />
    </>
    );
};

export default HomeView;
