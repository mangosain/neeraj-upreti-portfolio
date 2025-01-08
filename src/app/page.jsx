import React from "react";
import About from "./About/page";
import HeroSection from "./HeroSection";
import Skills from "./Skills/page";
import Experience from "./Exprience/page";
import Footer from "./Footer/Footer";
import Home from "./Project/page";
import Leadership from "./Leadership/page";

// import Leadership from './Leadership/page'

function page() {
  return (
    <div>
      <HeroSection />
      <About />
      <Experience />
      <Home />
      <Leadership />
      <Skills />
      <Footer />
    </div>
  );
}

export default page;
