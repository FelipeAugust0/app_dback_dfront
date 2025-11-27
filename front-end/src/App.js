import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

// NAVBAR
import NavBar from "./components/NavBar/NavBar";

// PAGES
import Home from "./pages/home/Home";
import Produto from "./pages/lista/produto/Produtoroduto";
import CadastroProduto from "./pages/cadastro/Produto/CadastroProduto";
import CadastroCategoria from "./pages/cadastro/Produto/CadastroCategoria";
import Categoria from "./pages/lista/categoria/Categoria"; // se tiver

function App() {
  return (
    <Router>
      <NavBar />
      <div className="mainContent">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produto />} />
          <Route path="/cadastro-produto" element={<CadastroProduto />} />
          <Route path="/categorias" element={<Categoria />} />
          <Route path="/cadastro-categoria" element={<CadastroCategoria />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
