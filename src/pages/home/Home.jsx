import { Button, Typography, Card } from "@material-tailwind/react";
// import BackImg from "../../assets/image8.svg"
import CoinBase from "../../assets/logo-coinbase.svg"
import Google from "../../assets/logo-google.svg"
import Netflix from "../../assets/logo-netflix.svg"
import Pinterest from "../../assets/logo-pinterest.svg"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./style.css";
import Fries from "/images/french-fries.svg"
import Services from "../../commeptes/homeComponents/servicesComponent"
import AboutUs from "../../commeptes/homeComponents/aboutUs"
import Menu from "../../commeptes/homeComponents/Menu";
import Testimonials from "../../commeptes/homeComponents/testimonials"
import Footer from "../../commeptes/Footer"
import { createGlobalStyle } from 'styled-components';
import { Search } from "../RestaurantSearch";


function Home() {

  const GlobalStyles = createGlobalStyle`
  /* ========== Google Fonts =========== */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
/* ========== CSS Variables =========== */
:root {
  --primary-color: #f94a3d;
  --yellow-color: #ffcf03;
  --black-color: #212244;
  --default-color: #69697b;
  --deep-yellow: #ff9401;
  --yellow-color-1: #ffe507;
  --red-color-1: #e83b2e;
  --red-color-2: #ee3e32;
  --light-red-color: #fdecec;
  --grey-color: #eaeaea;
  --grey-color-1: #f8f8f8;
  --white-color: #fff;
  --box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

*,
*::after,
*::before {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
}

html {
  font-size: 60.5%;
  box-sizing: border-box;
}

body {
  font-family: "Poppins", sans-serif;
  font-size: 1.6rem;
  font-weight: 400;
  color: var(--default-color);
}

h1,
h2,
h3,
h4 {
  color: var(--black-color);
  line-height: 1.2;
  font-weight: 500;
}

a {
  text-decoration: none;
  color: inherit;
}

li {
  list-style-type: none;
}

section {
  padding: 5rem 0 5rem;
  overflow: hidden;
}

p {
  line-height: 3rem;
}

img {
  max-width: 100%;
  height: auto;
}

/* ========== Custom Classes =========== */
.container {
  /* max-width: 120rem; */
  padding: 0 3rem;
  margin: auto;
}

@media (min-width: 1500px) {
  .container {
    max-width: 135rem;
  }
}
.d-flex {
  display: flex;
  align-items: center;
}

/* ========== Home =========== */
 .home {
  height: calc(100vh - 8.5rem);
  background-color: #ffeded;

}
 .home .row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  height: 100%;
}
 .home .row .faster {
  width: 22rem;
  background-color: #fdd1d1;
  color: var(--primary-color);
  font-size: 1.8rem;
  padding: 0.8rem 1rem;
  border-radius: 5rem;
  position: relative;
  margin-bottom: 1.5rem;
}
 .home .row .faster .image {
  position: absolute;
  top: 50%;
  right: -0.1rem;
  transform: translateY(-50%);
  background-color: var(--white-color);
  border-radius: 50%;
  width: 4.5rem;
  height: 4.5rem;
  justify-content: center;
}
 .home .row .faster .image img {
  height: 3rem;
}
 .home .row h1 {
  font-size: 6rem;
  margin-bottom: 3rem;
}
 .home .row h1 span {
  color: var(--primary-color);
}
 .home .row p {
  margin-bottom: 3rem;
  width: 80%;
}
 .home .row .btn {
  padding: 1.2rem 2.5rem;
}

@media (max-width: 1300px) {
   .home .row h1 {
    font-size: 4.5rem;
    margin-bottom: 2rem;
  }
   .home .row .faster {
    width: 20rem;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
   .home .row .faster .image {
    width: 4rem;
    height: 4rem;
  }
}
@media (max-width: 996px) {
   .home .row .col img {
    width: 40rem;
  }
   .home .row h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
   .home .row .btn {
    padding: 0.7rem 1.5rem;
  }
}
@media (max-width: 800px) {
   .home {
    height: calc(100vh + 12rem);
    padding-top: 4rem;
  }
   .home .row {
    grid-template-columns: 1fr;
  }
   .home .row h1 {
    font-size: 3rem;
  }
   .home .row h1 br {
    display: none;
  }
   .home .row p {
    width: 100%;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
   .home .row .btn {
    font-size: 1.5rem;
  }
   .home .row .col:last-child {
    text-align: center;
  }
}
/* ========== SignIn Form =========== */
 .wrapper {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 10000;
  transition: 0.5s;
  transform: scale(0);
  opacity: 0;
  visibility: hidden;
}
 .wrapper.active {
  transform: scale(1);
  opacity: 1;
  visibility: visible;
}
/* 
 .wrapper form {
  background-color: var(--white-color);
  border: 1px solid var(--grey-color);
  max-width: 50rem;
  width: 100%;
  padding: 2rem;
  box-shadow: var(--box-shadow);
  border-radius: 0.5rem;
  margin: 2rem;
}
 .wrapper form h2 {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
  padding-top: 2rem;
}
 .wrapper form .control {
  margin-bottom: 2rem;
}
 .wrapper form label {
  display: block;
  font-size: 2rem;
  margin-bottom: 1rem;
}
 .wrapper form input {
  font-family: "Poppins", sans-serif;
  font-size: 1.8rem;
  display: block;
  border: 1px solid var(--grey-color);
  padding: 1.3rem 0;
  text-indent: 1rem;
  border-radius: 0.5rem;
  width: 100%;
}
 .wrapper form .checkbox {
  margin-bottom: 2rem;
}
 .wrapper form .checkbox input {
  width: auto;
  margin-right: 0.5rem;
  cursor: pointer;
}
 /* .wrapper form button {
  display: block;
  width: 100%;
  padding: 1.3rem 0;
  font-size: 1.8rem;
  cursor: pointer;
} */
/* 
 .wrapper form .links {
  margin-top: 2rem;
}
 .wrapper form .links span {
  display: block;
  margin-bottom: 1rem;
  font-size: 1.8rem;
}
 .wrapper form .links span a {
  color: var(--primary-color);
}
 .wrapper form .links span a:hover {
  text-decoration: underline;
}
 .wrapper .close-form {
  position: absolute;
  top: 3rem;
  right: 4rem;
  color: var(--default-color);
  font-size: 4rem;
  cursor: pointer;
}  */
/* ========== Services =========== */
.services {
  padding: 10rem 0 10rem;
}
.services .row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  gap: 3rem;
  align-items: center;
}
.services .row h2 {
  font-size: 4.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}
.services .row h3 {
  font-size: 2.5rem;
  margin-top: 1.5rem;
  text-align: left;
}
.services .row .col img {
  height: 15rem;
}
.services .row .card {
  padding: 3rem;
  border-radius: 0 0 1rem 1rem;
  background-color: var(--white-color);
  position: relative;
  text-align: center;
}
.services .row .card::before {
  content: "";
  position: absolute;
  top: -1.5%;
  left: -1.5%;
  width: calc(100% + 1rem);
  height: calc(100% + 1rem);
  border-radius: 1rem;
  background: linear-gradient(to bottom, transparent 50%, #f3f3f3);
  z-index: -1;
}
.services .row .card:hover::before {
  background: linear-gradient(to bottom, transparent 50%, #ffcf03);
}

@media (max-width: 567px) {
  .services .row h2 {
    font-size: 3.5rem;
  }
}
/* ========== about =========== */
.about {
  background-color: var(--grey-color-1);
  padding: 10rem 0 10rem;
}
.about .row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 3rem;
}
.about .row .col:first-child img {
  height: 50rem;
}
.about .row .col h2 {
  font-size: 4.5rem;
  margin-bottom: 2rem;
}
.about .row .col p {
  margin-bottom: 4rem;
  width: 80%;
}
.about .row .col .d-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}
.about .row .col .d-grid .card {
  padding: 3rem;
  border-radius: 1rem;
  transition: all 300ms ease-in-out;
}
.about .row .col .d-grid .card h4 {
  font-size: 1.8rem;
  margin: 0.5rem 0 0.5rem;
}
.about .row .col .d-grid .card span {
  font-size: 1.5rem;
}
.about .row .col .d-grid .card:hover {
  background-color: var(--white-color);
  box-shadow: var(--box-shadow);
}

@media (max-width: 1200px) {
  .about .row .col h2 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .about .row .col p {
    margin-bottom: 1rem;
    width: 100%;
  }
  .about .row .col .d-grid {
    gap: 1rem;
  }
  .about .row .col .d-grid .card {
    padding: 1rem;
  }
  .about .row .col .d-grid .card img {
    height: 5rem;
  }
}
@media (max-width: 800px) {
  .about {
    padding: 5rem 0 10rem;
  }
  .about .row {
    grid-template-columns: 1fr;
    gap: 3rem 0;
  }
}
/* ========== Recipes =========== */
.recipes {
  padding: 10rem 0 10rem;
}
.recipes h2 {
  text-align: center;
  font-size: 4.8rem;
  font-weight: 600;
  margin-bottom: 4rem;
}
.recipes .filters {
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 4rem;
}
.recipes .filters span {
  font-size: 1.8rem;
  font-weight: 500;
  padding: 1rem;
  border-bottom: 2px solid var(--grey-color);
  cursor: pointer;
}
.recipes .filters span.active {
  color: var(--primary-color);
  border-color: var(--primary-color);
}
.recipes .products .swiper-wrapper {
  padding: 0 1rem 1rem;
}
.recipes .products .card {
  position: relative;
  padding: 1rem 1rem 2rem;
  border-radius: 0 0 1rem 1rem;
  background-color: var(--white-color);
  flex-direction: column;
}
.recipes .products .card::before {
  content: "";
  position: absolute;
  top: -1%;
  left: -1.5%;
  width: calc(100% + 1rem);
  height: calc(100% + 1rem);
  border-radius: 1rem;
  background: linear-gradient(to bottom, transparent 50%, #f3f3f3);
  z-index: -1;
}
.recipes .products .card:hover::before {
  background: linear-gradient(to bottom, transparent 50%, #ffcf03);
}
.recipes .products .card .image {
  height: 15rem;
  width: 15rem;
  margin-bottom: 1.5rem;
}
.recipes .products .card .image img {
  height: 100%;
  object-fit: contain;
}
.recipes .products .card .rating span {
  color: var(--deep-yellow);
  font-size: 2rem;
}
.recipes .products .card h4 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}
.recipes .products .card .price {
  font-size: 2rem;
  margin-bottom: 2rem;
}
.recipes .products .card .price .color {
  color: var(--primary-color);
  font-weight: 600;
  margin-left: 0.5rem;
}
.recipes .products .card .button {
  outline: none;
  border: none;
  padding: 1.2rem 1.7rem;
}
.recipes .pagination {
  text-align: center;
  margin-top: 3rem;
}
.recipes .pagination .swiper-pagination-bullet {
  background-color: var(--primary-color);
  height: 1rem;
  width: 1rem;
}
.recipes .pagination .swiper-pagination-bullet-active {
  width: 3rem;
  border-radius: 1.5rem;
}

@media (max-width: 800px) {
  .recipes {
    padding: 10rem 0 10rem;
  }
  .recipes h2 {
    font-size: 3.5rem;
    margin-bottom: 2rem;
  }
}
/* ========== Testimonials =========== */
.testimonials {
  padding: 10rem 0 10rem;
  background-color: var(--grey-color-1);
}
.testimonials .row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem 10rem;
  align-items: flex-start;
}
.testimonials .row .card {
  border-right: 2px solid #eaeaea;
}
.testimonials .row .card.active {
  border-color: var(--primary-color);
}
.testimonials .row .card.active .d-flex {
  background-color: var(--white-color);
  box-shadow: var(--box-shadow);
}
.testimonials .row .card .d-flex {
  border-radius: 1rem;
  width: 85%;
  padding: 1.5rem;
  cursor: pointer;
}
.testimonials .row .card .d-flex:not(:last-child) {
  margin-bottom: 0.5rem;
}
.testimonials .row .card .image {
  height: 8rem;
  width: 8rem;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 3rem;
}
.testimonials .row .card .image img {
  height: 100%;
  object-fit: cover;
}
.testimonials .row .card h4 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}
.testimonials .row .card span {
  font-size: 1.5rem;
}
.testimonials .row .col:last-child {
  position: relative;
  overflow: hidden;
  height: 44rem;
}
.testimonials .row .col:last-child h2 {
  font-size: 4.5rem;
  margin-bottom: 3rem;
}
.testimonials .row .col:last-child h2 span {
  color: var(--primary-color);
}
.testimonials .row .col:last-child .testimonial {
  position: absolute;
  bottom: -80%;
  transform: translateY(-30%);
  transition: 0.5s;
}
.testimonials .row .col:last-child .testimonial.active {
  bottom: 0%;
}
.testimonials .row .col:last-child .testimonial .d-flex {
  justify-content: space-between;
  border-bottom: 1px solid var(--grey-color);
  padding-bottom: 1.5rem;
  margin-bottom: 3rem;
}
.testimonials .row .col:last-child .testimonial .d-flex div:first-child {
  border-left: 2px solid var(--primary-color);
  padding-left: 1rem;
}
.testimonials .row .col:last-child .testimonial .d-flex div:first-child h4 {
  font-size: 2rem;
}
.testimonials .row .col:last-child .testimonial .d-flex div:first-child span {
  font-size: 1.5rem;
}
.testimonials .row .col:last-child .testimonial .d-flex .rating span {
  color: var(--deep-yellow);
}

@media (max-width: 1200px) {
  .testimonials .row {
    gap: 5rem 0;
  }
  .testimonials .row .col:last-child h2 {
    font-size: 3.5rem;
  }
  .testimonials .row .col:last-child .testimonial {
    bottom: -90%;
    transform: translateY(-10%);
  }
  .testimonials .row .card {
    border: none;
  }
}
@media (max-width: 996px) {
  .testimonials .row .col:last-child h2 {
    font-size: 3.5rem;
  }
  .testimonials .row .col:last-child .testimonial {
    transform: translateY(0%);
  }
}
@media (max-width: 800px) {
  .testimonials .row {
    grid-template-columns: 1fr;
  }
  .testimonials .row .card .d-flex {
    width: 100%;
  }
}
@media (max-width: 567px) {
  .testimonials .row .col:last-child h2 {
    font-size: 2.5rem;
  }
}
/* ========== App =========== */
.app {
  padding: 10rem 0 20rem;
}

.app .row {
  background-color: var(--primary-color);
  border-radius: 2rem;
  position: relative;
}
.app .row .col:first-child {
  margin-left: 5rem;
}
.app .row .col:first-child .circle {
  border-radius: 50%;
  height: 57rem;
  width: 57rem;
  border: 7rem solid var(--red-color-1);
  position: relative;
}
.app .row .col:first-child .circle .inner-circle {
  border-radius: 50%;
  height: 43rem;
  width: 43rem;
  border: 7rem solid var(--red-color-2);
}
.app .row .col:first-child .circle img {
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40rem;
}
.app .row .col:last-child {
  position: absolute;
  top: 50%;
  right: 10rem;
  transform: translateY(-50%);
  width: 40%;
}
.app .row .col:last-child h2 {
  color: var(--white-color);
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
}
.app .row .col:last-child p {
  color: var(--white-color);
  margin-bottom: 2rem;
}
.app .row .col:last-child .d-flex img:first-child {
  margin-right: 2rem;
}

@media (max-width: 1300px) {
  .app .row .col:first-child {
    margin-left: 0;
  }
  .app .row .col:last-child h2 {
    font-size: 3.5rem;
  }
}
@media (max-width: 996px) {
  .app {
    background-color: var(--primary-color);
    padding: 10rem 0 10rem;
    height: 40rem;
  }
  .app .row {
    height: 100%;
  }
  .app .row .col:first-child {
    display: none;
  }
  .app .row .col:last-child {
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
  }
  .app .row .col:last-child h2 {
    font-size: 3rem;
  }
  .app .row .col:last-child img {
    height: 4rem;
  }
}
@media (max-width: 567px) {
  .app .row .col:last-child h2 {
    font-size: 2.5rem;
  }
}
/* ========== Footer =========== */
.footer {
  background: linear-gradient(145deg, rgba(249, 74, 61, 0.1) 60%, rgba(255, 229, 7, 0.1));
  padding: 10rem 3rem 10rem;
}
.footer .row {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
}
.footer .col:first-child .logo {
  margin-bottom: 3rem;
}
.footer .col:first-child p {
  margin-bottom: 3rem;
  width: 70%;
}
.footer .col:first-child .icons {
  margin-bottom: 2rem;
}
.footer .col:first-child .icon {
  color: var(--white-color);
  justify-content: center;
  height: 3rem;
  width: 3rem;
  border-radius: 0.5rem;
  background-color: #252525;
  cursor: pointer;
}
.footer .col:first-child .icon:not(:last-child) {
  margin-right: 1rem;
}
.footer .col:last-child {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.footer .col:last-child div {
  display: flex;
  flex-direction: column;
}
.footer .col:last-child div a {
  font-size: 1.5rem;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
}
.footer .col:last-child h4 {
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 2rem;
}

.footer-bottom {
  background-color: var(--primary-color);
  padding: 1.5rem 0;
}
.footer-bottom .row {
  justify-content: space-between;
}
.footer-bottom .row p {
  color: var(--white-color);
}

@media (max-width: 768px) {
  .footer {
    padding: 20rem 0 10rem;
  }
  .footer .col:first-child {
    display: none;
  }
  .footer .row {
    display: block;
  }
}
@media (max-width: 567px) {
  .footer .col:last-child {
    grid-template-columns: 1fr 1fr;
    gap: 3rem 0;
  }
}
  `

  return (
    <>
    <GlobalStyles/>
      <div className="home">
        <div className="row container">
          <div className="col">
            <div className="faster">
              More than Faster
              <div className="image d-flex">
                <img src={Fries} alt="" />
              </div>
            </div>
            <h1>
              Get your cuisine <br />
              delivered right to <br />
              <span className="color">your door </span>
            </h1>
            <p>
              Food that is delivered at the right time. The trendy food delivery
              partner. Good food is what we deliver. Your hunger companion.
            </p>
            <a href="" className="btn">Explore Food</a>
          </div>
          <div className="col">
            <img src="./images/delivery-guy.svg" alt="" />
          </div>
        </div>
      </div>
      <Services />
      <AboutUs />
      <Menu />
      <Testimonials />
       <Search/>
      <Footer />
    </>
  );
}

export default Home;
