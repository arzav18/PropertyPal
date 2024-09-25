import React, { useContext } from "react";
import "./homePage.scss";
import SearchBar from "../components/SearchBar/SearchBar";
import { AuthContext } from "../context/AuthContext";

function HomePage() {
  const { currentUser } = useContext(AuthContext);

  console.log(currentUser);
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate and get your dream place</h1>
          <p>
            Your Home, Your Haven. Discover your dream home with us. We are here
            to help you find the perfect living space that suits your lifestyle
            and budget. Whether you are searching for a cozy apartment, a
            spacious family home, or a luxurious estate, our extensive listings
            and expert team will guide you every step of the way. Explore our
            wide range of properties, from bustling city centers to serene
            suburban neighborhoods. With our user-friendly platform and
            personalized assistance, you will find the ideal place to call home.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Awards Gained</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Properties Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt=""></img>
      </div>
    </div>
  );
}

export default HomePage;
