import React, { useEffect, useState } from "react";
import { getCategorias, deleteCategoria, updateCategoria } from "../../../api/Api";
import "./ListaCategoria.css";

const ListaCategoria = () => {
  const [categorias, setCategorias] = useState([]);
  const [editando, setEditando] = useState(null);
  const [novoNome, setNovoNome] = useState("");

  useEffect(() => {
    carregarCategorias();
  }, []);

  const carregarCategorias = async () => {
    const data = await getCategorias();
    setCategorias(data);
  };

  const handleDelete = async (id) => {
    // Adicionar confirmação aqui seria uma boa prática!
    if (window.confirm("Tem certeza que deseja excluir esta categoria?")) {
        await deleteCategoria(id);
        carregarCategorias();
    }
  };

  const handleEdit = (categoria) => {
    setEditando(categoria.id);
    setNovoNome(categoria.nome);
  };

  const handleSave = async (id) => {
    // Prevenção simples contra nome vazio
    if (!novoNome.trim()) return alert("O nome da categoria não pode ser vazio.");
    
    // O seu código original para encontrar a categoria e atualizar o nome é perfeito:
    const categoriaAtualizada = categorias.find(c => c.id === id);

    await updateCategoria(id, { ...categoriaAtualizada, nome: novoNome.trim() });
    
    setEditando(null);
    carregarCategorias();
  };

  return (
    // Adicionando a classe principal aqui
    <div className="ListaCategoria-container">
      <h2>Lista de Categorias</h2>
      <ul>
        {categorias.map((categoria) => (
          <li 
            key={categoria.id} 
            className={editando === categoria.id ? "edit-mode" : ""}
          >
            {editando === categoria.id ? (
              <>
                {/* O input não precisa de div extra se a li já for flex */}
                <div className="button-group">
                  <input
                    type="text"
                    value={novoNome}
                    onChange={(e) => setNovoNome(e.target.value)}
                  />
                  {/* Mudando para classe 'salvar' */}
                  <button className="salvar" onClick={() => handleSave(categoria.id)}>Salvar</button>
                  <button className="cancelar" onClick={() => setEditando(null)}>Cancelar</button>
                </div>
              </>
            ) : (
              <>
                <span>{categoria.nome}</span>
                <div className="button-group">
                  <button className="editar" onClick={() => handleEdit(categoria)}>Editar</button>
                  <button className="deletar" onClick={() => handleDelete(categoria.id)}>Excluir</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaCategoria;