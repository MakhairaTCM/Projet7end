import React from "react";

import Header from "../components/Header";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";







const Home = () => {
  return (
    <div className="bodyFooter">
      <div className="marginBody">
        <Header />
        <Banner textContent="Chez vous, partout et ailleurs"/>
        <Gallery/>
      </div>
     
      <Footer/>
    </div>
  );
};

export default Home;
