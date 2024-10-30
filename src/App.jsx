
import React from "react";
import { BrowserRouter as Router, } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import Notified from "./components/Notified/Notified";
import Footer from "./components/Footer/Footer";
import KidsWear from "./components/KidsWear/KidsWear";
import MensWear from "./components/MensWear/MensWear";
import Electronic from "./components/Electronic/Electronic";

function App() {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <Navbar />
      <div id="hero" className="mt-[45px] md:mt-0 lg:mt-0">
        <Hero />
      </div>

      <div id="products">
        <Products />
      </div>
      <div id="top-rated">
        <TopProducts />
      </div>
      <Banner />
      <div id="kids-wear">
        <KidsWear />
      </div>
      <div id="mens-wear">
        <MensWear />
      </div>
      <div id="electronics">
        <Electronic />
      </div>
      <Notified />
      <Footer />
    </Router>
  );
}

export default App;
