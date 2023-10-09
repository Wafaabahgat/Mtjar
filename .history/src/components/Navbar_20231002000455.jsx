import React from "react";
import myImage from '../assets/Logo.jpg';


const Navbar = () => {
  return (
    <div>
      <div>
        <img src={myImage} alt="Logo"/>
      </div>
    </div>
  );
};

export default Navbar;
