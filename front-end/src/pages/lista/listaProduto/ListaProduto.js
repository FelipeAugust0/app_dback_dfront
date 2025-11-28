import React, { useEffect, useState } from "react";
import "./ListaProduto.css";

function ListaProduto() {

  const [produtos, setProdutos] = useState([]);

  const buscarProdutos = async () => {
    try {
      const response = await fetch("http://localhost:4567/produtos");
      const data = await response.json();
      setProdutos(data);
    } catch (error) {
      console.log("Erro ao buscar produtos:", error);
    }
  };

  const deletarProduto = async (id) => {
    if (!window.confirm("Tem certeza que deseja excluir este produto?")) return;

    try {
      const response = await fetch(`http://localhost:4567/produtos/${id}`, {
        method: "DELETE"
      });

      if (response.ok) {
        alert("Produto removido!");
        buscarProdutos();
      } else {
        alert("Erro ao remover produto");
      }

    } catch (error) {
      alert("Erro de conexão com backend");
    }
  };

  useEffect(() => {
    buscarProdutos();
  }, []);

  return (
    <div className="container-produto">
      <h2>Lista de Produtos</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>Estoque</th>
            <th>Categoria</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {produtos.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nome}</td>
              <td>R$ {item.preco.toFixed(2)}</td>
              <td>{item.estoque}</td>
              <td>{item.id_categoria}</td>
              <td>
                <button className="btn-delete" onClick={() => deletarProduto(item.id)}>
                  Excluir
                </button>

                <button className="btn-edit">
                  Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaProduto;
