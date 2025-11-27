import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

function NavBar() {

  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-logo">📦 ProdutosApp</div>

      <ul className="nav-links">
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>

        <li className={location.pathname === "/produtos" ? "active" : ""}>
          <Link to="/produtos">Lista Produtos</Link>
        </li>

        <li className={location.pathname === "/cadastro-produto" ? "active" : ""}>
          <Link to="/cadastro-produto">Cadastro Produto</Link>
        </li>

        <li className={location.pathname === "/categorias" ? "active" : ""}>
          <Link to="/categorias">Lista Categorias</Link>
        </li>

        <li className={location.pathname === "/cadastro-categoria" ? "active" : ""}>
          <Link to="/cadastro-categoria">Cadastro Categoria</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
