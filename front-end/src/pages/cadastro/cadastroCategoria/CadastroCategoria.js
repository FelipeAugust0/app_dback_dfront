import React, { useState } from "react";
import { createCategoria } from "../../../api/Api";
import "./CadastroCategoria.css";

const CadastroCategoria = () => {
  const [nome, setNome] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nome) {
      alert("Informe o nome da categoria.");
      return;
    }

    try {
      const response = await createCategoria({ nome });

      if (response && response.id) {
        alert("Categoria cadastrada com sucesso!");
        setNome("");
      } else {
        alert("Erro ao cadastrar a categoria.");
      }
    } catch (error) {
      alert("Erro de conexão com o servidor.");
      console.error(error);
    }
  };

  return (
    <div className="container-cadastro">
      <h2>Cadastrar Categoria</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome da Categoria:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite o nome"
            required
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastroCategoria;