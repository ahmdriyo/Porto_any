import React from "react";
import Navbar from "../component/navbar";
import About from ".";
import Footer from "../component/footer";
const about = () => {
  return (
    <>
      <Navbar />
      <div className="about-page">
        <About />
      </div>
      <Footer />
    </>
  );
};

export default about;
