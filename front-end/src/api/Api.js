// Base URL da API
const BASE_URL = "http://localhost:4567";

// ============================
// PRODUTOS
// ============================

export const getProdutos = async () => {
  const response = await fetch(`${BASE_URL}/produtos`);
  return response.json();
};

export const getProdutoById = async (id) => {
  const response = await fetch(`${BASE_URL}/produtos/${id}`);
  return response.json();
};

export const createProduto = async (produto) => {
  const response = await fetch(`${BASE_URL}/produtos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(produto),
  });
  return response.json();
};

export const updateProduto = async (id, produto) => {
  const response = await fetch(`${BASE_URL}/produtos/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(produto),
  });
  return response.json();
};

export const deleteProduto = async (id) => {
  await fetch(`${BASE_URL}/produtos/${id}`, { method: "DELETE" });
};

// ============================
// CATEGORIAS
// ============================

export const getCategorias = async () => {
  const response = await fetch(`${BASE_URL}/categorias`);
  return response.json();
};

export const getCategoriaById = async (id) => {
  const response = await fetch(`${BASE_URL}/categorias/${id}`);
  return response.json();
};

export const createCategoria = async (categoria) => {
  const response = await fetch(`${BASE_URL}/categorias`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(categoria),
  });
  return response.json();
};

export const updateCategoria = async (id, categoria) => {
  const response = await fetch(`${BASE_URL}/categorias/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(categoria),
  });
  return response.json();
};

export const deleteCategoria = async (id) => {
  const response = await fetch(`${BASE_URL}/categorias/${id}`, { method: "DELETE" });
  if (!response.ok && response.status !== 204) {
    const msg = await response.text();
    throw new Error(msg || `Falha ao excluir. Status: ${response.status}`);
  }
  return true;
};
