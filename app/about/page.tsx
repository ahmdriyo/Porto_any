import React from "react";
import Navbar from "../component/navbar";
import About from ".";
import Footer from "../component/footer";
const about = () => {
  return (
    <>
      <Navbar />
      <div className="cts h-screen">
        <About />
      </div>
      <Footer />
    </>
  );
};

export default about;
