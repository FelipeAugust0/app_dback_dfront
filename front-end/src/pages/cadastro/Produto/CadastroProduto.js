import React, { useState } from "react";
import "./CadastroProduto.css";

function CadastroProduto() {

  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [categoriaId, setCategoriaId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nome || !preco || !categoriaId) {
      alert("Preencha todos os campos.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/produto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: nome,
          preco: parseFloat(preco),
          categoriaId: parseInt(categoriaId)
        })
      });

      if (response.ok) {
        alert("Produto cadastrado com sucesso!");
        setNome("");
        setPreco("");
        setCategoriaId("");
      } else {
        alert("Erro ao cadastrar o produto.");
      }

    } catch (error) {
      alert("Erro de conexão com o servidor.");
      console.log(error);
    }
  };

  return (
    <div className="container-cadastro">
      <h2>Cadastrar Produto</h2>
      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Preço:</label>
          <input
            type="number"
            step="0.01"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>ID da Categoria:</label>
          <input
            type="number"
            value={categoriaId}
            onChange={(e) => setCategoriaId(e.target.value)}
          />
        </div>

        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default CadastroProduto;
