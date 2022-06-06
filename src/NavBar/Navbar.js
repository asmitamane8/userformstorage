import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div >
      <nav>
        <Link to={"/"}  >
         <h1> USER MANAGEMENT SYSTEM </h1>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;