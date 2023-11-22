import { React } from "react";
import photoGrid from "../images/photo_grid.png";

const Hero = () => {
  return (
    <section className="hero">
      <img src={photoGrid} className="hero--image" />
      <h1 className="hero--header">Online Experiences</h1>
      <p className="hero--para">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
};

export default Hero;
