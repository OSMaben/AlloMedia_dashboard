import { Button, Typography, Card } from "@material-tailwind/react";
// import BackImg from "../assets/image8.svg"
import CoinBase from "../assets/logo-coinbase.svg"
import Google from "../assets/logo-google.svg"
import Netflix from "../assets/logo-netflix.svg"
import Pinterest from "../assets/logo-pinterest.svg"
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../App.css"
import Fries from "/images/french-fries.svg"
import Services from "../commeptes/homeComponents/servicesComponent"
import AboutUs from "../commeptes/homeComponents/aboutUs"
import Menu from "../commeptes/homeComponents/Menu";
import Testimonials from "../commeptes/homeComponents/testimonials"
import Footer from "../commeptes/Footer"
 

function Home() {
  return (
   <>
     <div class="home">
    <div class="row container">
      <div class="col">
        <div class="faster">
          More than Faster
          <div class="image d-flex">
            <img src={Fries} alt="" />
          </div>
        </div>
        <h1>
          Get your cuisine <br />
          delivered right to <br />
          <span class="color">your door</span>
        </h1>
        <p>
          Food that is delivered at the right time. The trendy food delivery
          partner. Good food is what we deliver. Your hunger companion.
        </p>
        <a href="" class="btn">Explore Food</a>
      </div>
      <div class="col">
        <img src="./images/delivery-guy.svg" alt="" />
      </div>
    </div>
  </div>
    <Services/>
    <AboutUs/>
    <Menu/>
    <Testimonials/>
    <Footer/>
  </>
  );
}

export default Home;
