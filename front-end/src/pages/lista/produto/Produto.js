import React, { useEffect, useState } from "react";
import "./Produto.css";

function Produto() {

  const [produtos, setProdutos] = useState([]);

  // ---- GET Produtos ----
  const buscarProdutos = async () => {
    try {
      const response = await fetch("http://localhost:8080/produto");
      const data = await response.json();
      setProdutos(data);
    } catch (error) {
      console.log("Erro ao buscar produtos:", error);
    }
  };

  // ---- DELETE Produto ----
  const deletarProduto = async (id) => {
    if (!window.confirm("Tem certeza que deseja excluir este produto?")) return;

    try {
      const response = await fetch(`http://localhost:8080/produto/${id}`, {
        method: "DELETE"
      });

      if (response.ok) {
        alert("Produto removido!");
        buscarProdutos(); // atualiza lista
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
            <th>Categoria</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {produtos.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nome}</td>
              <td>R$ {item.preco}</td>
              <td>{item.categoriaId ?? item.categoria?.id ?? "--"}</td>
              <td>
                <button className="btn-delete" onClick={() => deletarProduto(item.id)}>
                  Excluir
                </button>

                {/* botão editar para o próximo passo */}
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

export default Produto;
