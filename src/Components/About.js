import React from "react";
import { Carousel, Container } from "react-bootstrap";
import "./about.css";
import "../App.css";
import aboutimg1 from "./pexels-dominika-roseclay-688668.jpg";
import aboutimg2 from "./newpaper.jpg"
import aboutimg3 from './aboutimg3.jpg'
import aboutimg5 from './aboutimg5.jpg'
function About() {
  return (
    <>
      <Container className="container1about">
        <h1>
          Who <span>We</span> are
        </h1>
        <p>
          <a href="/" className="taglogo">
            Zonel<span>.</span>
            <sup>v2.0</sup>
          </a>
          Welcome to OurCompany, where we are committed to providing exceptional
          products and services to our customers.
        </p>
        <p>
          OurCompany was founded in 20XX and has since grown to become a leading
          provider in the industry. Over the years, we have achieved several
          milestones that have shaped our success.
        </p>
      </Container>

      <Container className="container2about">
        <div className="containerdivabout">
          <img src={aboutimg1} alt="img" className="centered-image" />
        </div>
      </Container>

      <Container className="container3about">
        <h2>
          {" "}
          <span>Our</span> Values and Philosophy
        </h2>
        <p>
          At OurCompany, we believe in integrity, innovation, and customer
          satisfaction. Our mission is to deliver high-quality solutions that
          exceed expectations.
        </p>
        <h2>
          {" "}
          <span>Our</span> Achievements and Awards
        </h2>
        <p>
          We are proud to have received various accolades and recognition for
          our commitment to excellence and customer service.
        </p>

        <h2>
          {" "}
          <span>Our</span> Client Testimonials
        </h2>
        <p>
          See what our satisfied customers have to say about their experience
          working with OurCompany.
        </p>
        <h2>
          {" "}
          <span>Our</span> Team
        </h2>
        <p>
          Meet the faces behind OurCompany. Our dedicated team of professionals
          brings a wealth of expertise and passion to everything we do.
        </p>
      </Container>

      <Container className="text-center container4about">
        <h2>Media and Press Coverage</h2>
        <p>
          Take a look at some of the media coverage and press releases featuring
          OurCompany.
        </p>

        <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={aboutimg5}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={aboutimg2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={aboutimg3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </Container>
      <br />
    </>
  );
}

export default About;
