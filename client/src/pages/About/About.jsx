import React from "react";
import "./about.scss";
import photo from "../../../assets/photo.jpeg";

function About() {
  return (
    <div className="aboutPage">
      <div className="aboutContainer">
        <h1 className="aboutTitle">About Us</h1>
        <p className="aboutIntro">
          Welcome to PropertyPal, where we bring transparency, trust, and
          simplicity to your property buying and selling journey. Our mission is
          to offer a user-friendly experience that allows you to explore real
          estate opportunities with ease and confidence.
        </p>

        <div className="section">
          <h2 className="sectionTitle">Our Motivation</h2>
          <p className="sectionContent">
            We were motivated to create this project because we saw the
            challenges people face in navigating the real estate market. The
            process is often filled with hidden fees, confusing paperwork, and a
            lack of trust between buyers and sellers. We wanted to change that
            by developing a platform that prioritizes transparency and
            simplicity, making property transactions seamless for everyone.
          </p>
        </div>

        <div className="section">
          <h2 className="sectionTitle">Our Vision</h2>
          <p className="sectionContent">
            Our vision is to create a real estate marketplace where trust is at
            the core of every transaction. We believe that everyone deserves a
            smooth and stress-free real estate experience, and we&apos;re
            committed to providing you with the tools and support to make that
            possible.
          </p>
        </div>

        <div className="section">
          <h2 className="sectionTitle">Our Commitment</h2>
          <p className="sectionContent">
            We&apos;re dedicated to building a platform that evolves with the
            needs of our users. Whether you&apos;re buying, selling, or
            investing in property, we&apos;re here to ensure your journey is as
            efficient and enjoyable as possible.
          </p>
        </div>
      </div>

      <div className="founderContainer">
        <img src={photo} alt="Founder" className="founderImage" />
        <h3 className="founderName">Arzav Jain</h3>
        <p className="founderTitle">Founder</p>
      </div>
    </div>
  );
}

export default About;
