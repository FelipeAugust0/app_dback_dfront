import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

function NavBar() {

  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-logo">ProdutosApp</div>

      <ul className="nav-links">
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>

        <li className={location.pathname === "/ListaProdutos" ? "active" : ""}>
          <Link to="/ListaProdutos">Lista Produtos</Link>
        </li>

        <li className={location.pathname === "/CadastroProduto" ? "active" : ""}>
          <Link to="/CadastroProduto">Cadastro Produto</Link>
        </li>

        <li className={location.pathname === "/ListaCategoria" ? "active" : ""}>
          <Link to="/ListaCategoria">Lista Categorias</Link>
        </li>

        <li className={location.pathname === "/CadastroCategoria" ? "active" : ""}>
          <Link to="/CadastroCategoria">Cadastro Categoria</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
