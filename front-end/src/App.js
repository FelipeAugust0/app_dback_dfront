import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

// NAVBAR
import NavBar from "./components/NavBar/NavBar";

// PAGES
import Home from "./pages/home/Home";
import ListaProduto from "./pages/lista/listaProduto/ListaProduto";
import CadastroProduto from "./pages/cadastro/cadastroProduto/CadastroProduto";
import ListaCategoria from "./pages/lista/listaCategoria/ListaCategoria";
import CadastroCategoria from "./pages/cadastro/cadastroCategoria/CadastroCategoria";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="mainContent">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/ListaProdutos" element={<ListaProduto />} />
          <Route path="/CadastroProduto" element={<CadastroProduto />} />
          <Route path="/ListaCategoria" element={<ListaCategoria />} />
          <Route path="/CadastroCategoria" element={<CadastroCategoria />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
