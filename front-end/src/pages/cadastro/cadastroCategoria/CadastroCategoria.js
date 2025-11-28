import React, { useEffect, useState } from "react";
import "./CadastroCategoria.css";

function CadastroCategoria({ categoria, setCategoria }) {
  const [nome, setNome] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const NewNome = { id: Date.now(), nome };

    setCategoria([...categoria, NewNome]);

    setNome("");
  };

  return (
    <div className="CadastrodeCategoria">
      <h2>Cadastrar categoria</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default CadastroCategoria;
