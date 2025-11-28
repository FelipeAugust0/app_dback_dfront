import React, { useEffect, useState } from "react";
import "./ListaCategoria.css";

function ListaCategoria() {
  const [categorias, setCategorias] = useState([]);
  const [editarId, setEditarId] = useState(null);
  const [newNome, setNewNome] = useState("");

  // GET CATEGORIAS DO BACKEND
  const buscarCategorias = async () => {
    try {
      const response = await fetch("http://localhost:4567/categorias");
      const data = await response.json();
      setCategorias(data);
    } catch (error) {
      console.log("Erro ao carregar categorias:", error);
    }
  };

  // DELETE CATEGORIA NO BACKEND
  const handleDelete = async (id) => {
    if (!window.confirm("Tem certeza que deseja excluir?")) return;

    try {
      const response = await fetch(`http://localhost:4567/categorias/${id}`, {
        method: "DELETE"
      });
      if (response.ok) {
        alert("Categoria removida!");
        buscarCategorias();
      } else {
        alert("Erro ao remover categoria");
      }
    } catch (error) {
      alert("Erro de conexão com backend");
    }
  };

  // PUT / UPDATE CATEGORIA
  const handleSave = async (id) => {
    try {
      const response = await fetch(`http://localhost:4567/categorias/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome: newNome }),
      });

      if (response.ok) {
        alert("Categoria atualizada!");
        buscarCategorias();
        setEditarId(null);
      } else {
        alert("Erro ao atualizar categoria");
      }
    } catch (error) {
      alert("Erro de conexão com backend");
    }
  };

  const handleEdit = (categoria) => {
    setEditarId(categoria.id);
    setNewNome(categoria.nome);
  };

  useEffect(() => {
    buscarCategorias();
  }, []);

  return (
    <div className="lista-categoria">
      <h2>Lista de Categorias</h2>
      {categorias.length === 0 ? (
        <p>Nenhuma categoria cadastrada</p>
      ) : (
        <ul>
          {categorias.map((categoria) => (
            <li key={categoria.id}>
              {editarId === categoria.id ? (
                <>
                  <input
                    type="text"
                    value={newNome}
                    onChange={(e) => setNewNome(e.target.value)}
                  />
                  <button onClick={() => handleSave(categoria.id)}>Salvar</button>
                </>
              ) : (
                <>
                  <span>{categoria.nome}</span>
                  <button onClick={() => handleEdit(categoria)}>Editar</button>
                  <button onClick={() => handleDelete(categoria.id)}>Deletar</button>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListaCategoria;
