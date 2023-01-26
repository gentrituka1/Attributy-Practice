import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <Link className="header-link" to="/puntoret">
        <h1>Attributy.</h1>
      </Link>
      <Link to="/puntoret/createOrEditPuntoret">
        <button>Create a Puntor</button>
      </Link>
    </header>
  );
}

export default Header;
