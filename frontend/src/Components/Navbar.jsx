
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>App de Receitas</h2>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/categories">Categorias</Link>
        <Link to="/recipes">Receitas</Link>
      </div>
    </nav>
  );
}

export default Navbar;

