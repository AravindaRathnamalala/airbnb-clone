import { React } from "react";
import logo from "../images/airbnb-logo.png";
import '../App.css';


const NavBar = () => {
  return (
    <nav>
      <img src={logo} className="nac-logo"/>
    </nav>
  );
};

export default NavBar;
