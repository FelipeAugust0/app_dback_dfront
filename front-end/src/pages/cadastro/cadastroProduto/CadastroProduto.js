import React, { useState, useEffect } from "react";
// Importe as funções da API (assumindo que o caminho é este)
import { createProduto, getCategorias } from "../../../api/Api";
import "./CadastroProduto.css";

function CadastroProduto() {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [estoque, setEstoque] = useState("");

  // 1. Estados para categorias
  const [categorias, setCategorias] = useState([]);
  const [idCategoriaSelecionada, setIdCategoriaSelecionada] = useState("");

  // 2. useEffect para carregar as categorias
  useEffect(() => {
    const carregarCategorias = async () => {
      try {
        const lista = await getCategorias(); // Chama a API
        setCategorias(lista);
        // Pré-selecionar a primeira categoria, se existir
        if (lista.length > 0) {
          setIdCategoriaSelecionada(lista[0].id);
        }
      } catch (error) {
        console.error("Erro ao carregar categorias:", error.message);
        // Não impede o usuário de tentar cadastrar, mas avisa
        alert(`Erro ao carregar categorias: ${error.message}`);
      }
    };
    carregarCategorias();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nome || !preco || !idCategoriaSelecionada || !estoque) {
      alert("Preencha todos os campos.");
      return;
    }

    const produtoParaCriar = {
      nome: nome,
      preco: parseFloat(preco),
      estoque: parseInt(estoque),
      // Converte o ID selecionado (que vem como string do select) para número
      id_categoria: parseInt(idCategoriaSelecionada),
    };

    try {
      // Usa a função de serviço centralizada (com tratamento de erro)
      const novoProduto = await createProduto(produtoParaCriar);

      // Se a promise não foi rejeitada, o status foi 201 (Created)
      if (novoProduto && novoProduto.id) {
        alert("Produto cadastrado com sucesso!");
        setNome("");
        setPreco("");
        setEstoque("");
        // Não é necessário resetar idCategoriaSelecionada se mantivermos a pré-seleção
      } else {
        // Fallback se a API retornar 201, mas sem o ID
        alert("Erro desconhecido ao cadastrar o produto.");
      }
    } catch (error) {
      // 3. Captura o erro detalhado (400, 500) vindo do handleResponse
      alert(`Falha ao cadastrar: ${error.message}`);
      console.error(error);
    }
  };

  return (
    <div className="container-cadastro">
      <h2>Cadastrar Produto</h2>

      <form onSubmit={handleSubmit}>
        {/* Nome, Preço, Estoque (sem mudanças) */}
        {/* ... (campos de Nome, Preço e Estoque omitidos para brevidade) ... */}

        <div className="form-group">
          <label>Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Preço:</label>
          <input
            type="number"
            step="0.01"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Estoque:</label>
          <input
            type="number"
            value={estoque}
            onChange={(e) => setEstoque(e.target.value)}
            required
          />
        </div>

        {/* 4. Campo de Seleção de Categoria */}
        <div className="form-group">
          <label>Categoria:</label>
          <select
            value={idCategoriaSelecionada}
            onChange={(e) => setIdCategoriaSelecionada(e.target.value)}
            required
            // Desabilita se a lista de categorias não foi carregada
            disabled={categorias.length === 0}
          >
            {categorias.length === 0 ? (
              <option value="">Carregando categorias...</option>
            ) : (
              categorias.map((categoria) => (
                <option key={categoria.id} value={categoria.id}>
                  {categoria.nome}
                </option>
              ))
            )}
          </select>
        </div>

        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default CadastroProduto;
