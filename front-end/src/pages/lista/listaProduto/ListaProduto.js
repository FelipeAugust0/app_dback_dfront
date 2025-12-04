import React, { useEffect, useState } from "react";
import { getProdutos, deleteProduto, updateProduto } from "../../../api/Api";
import "./ListaProduto.css";

const ListaProduto = () => {
  const [produtos, setProdutos] = useState([]);
  const [editando, setEditando] = useState(null);
  const [novoNome, setNovoNome] = useState("");
  const [novoPreco, setNovoPreco] = useState("");

  useEffect(() => {
    carregarProdutos();
  }, []);

  const carregarProdutos = async () => {
    const data = await getProdutos();
    setProdutos(data);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Tem certeza que deseja excluir este produto?")) {
      await deleteProduto(id);
      carregarProdutos();
    }
  };

  const handleEdit = (produto) => {
    setEditando(produto.id);
    setNovoNome(produto.nome);
    setNovoPreco(produto.preco.toString()); 
  };

  const handleSave = async (id) => {
    if (!novoNome.trim() || !novoPreco.trim() || isNaN(parseFloat(novoPreco))) {
      return alert("Por favor, preencha nome e preço válidos.");
    }
    
    // Encontra o produto original para manter outros campos
    const produtoOriginal = produtos.find(p => p.id === id);

    const dadosAtualizados = {
        ...produtoOriginal,
        nome: novoNome.trim(),
        preco: parseFloat(novoPreco), 
    };

    await updateProduto(id, dadosAtualizados);
    
    setEditando(null);
    setNovoNome("");
    setNovoPreco("");
    carregarProdutos();
  };

  return (
    <div className="ListaProduto-container">
      <h2>Lista de Produtos</h2>
      <ul>
        {produtos.map((produto) => (
          <li 
            key={produto.id}
            className={editando === produto.id ? "edit-mode" : ""}
          >
            {editando === produto.id ? (
              <div className="button-group edit-fields">
                <input
                  type="text"
                  placeholder="Nome"
                  value={novoNome}
                  onChange={(e) => setNovoNome(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Preço"
                  value={novoPreco}
                  onChange={(e) => setNovoPreco(e.target.value)}
                  min="0.01"
                  step="0.01"
                />
                <button className="salvar" onClick={() => handleSave(produto.id)}>Salvar</button>
                <button className="cancelar" onClick={() => setEditando(null)}>Cancelar</button>
              </div>
            ) : (
              <>
                <span className="produto-info">
                    {produto.nome} - R$ {produto.preco.toFixed(2).replace('.', ',')}
                </span>
                <div className="button-group">
                  <button className="editar" onClick={() => handleEdit(produto)}>Editar</button>
                  <button className="deletar" onClick={() => handleDelete(produto.id)}>Excluir</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaProduto;