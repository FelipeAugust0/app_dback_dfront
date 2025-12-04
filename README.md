# Sistema de Gerenciamento de Produtos e Categorias

Esse sistema é uma aplicação Full Stack desenvolvido para gerenciar um catálogo de produtos e suas respectivas categorias. O sistema fornece uma interface de usuário moderna para realizar operações **CRUD (Criar, Ler, Atualizar, Deletar)**, essenciais para o controle de inventário.

O projeto segue uma arquitetura clara, dividida em duas partes principais:
* **Frontend (Interface):** Aplicação em React, responsável pela navegação e interação do usuário.
* **Backend (API):** Servidor construído em Java, responsável pela lógica de negócio, persistência dos dados e fornecimento dos endpoints REST.

---

## Tecnologias Utilizadas

* **React:** Framwork JavaScript para a contrução das interfaces.
* **React-Router-DOM:** Gerenciamento de rotas e navegação.
* **Java:** Linguagem principal do servidor.
* **Spark:** Microframework Java para criar aplicações web rápidas.
* **MySQL:** Sistema de gerenciamento de banco de dados que é usado nesse projeto.

---

## Funcionalidades Principais

* Visualização completa, Edição do Nome e Preço, e Exclusão de Produtos.
* Criação de novos produtos, incluindo Nome, Preço, Estoque e Categoria.
* Visualização de todas as categorias, Edição do Nome e Exclusão de Categorias.
* Criação de novas categorias por nome.

---

## Instalação e Setup

### Pré-requisitos

* **Node.js**, **npm** e **React-Router-DOM** instalados.
* **Java JDK** (versão 8 ou superior).
* **Spark Java**.
* **MySQL**.
* **Maven** ou **Gradle** (para gerenciar dependências e compilar o projeto Java). Também pode ser usado o VS Code.

---

 1º Passo: Clonar o Repositório. No prompt de comando, digite:

* cmd
* git clone https://github.com/FelipeAugust0/app_dback_dfront.git
* cd app_dback_dfront

---

 2º Passo: Configurar e Iniciar o Backend (Java). Essa é a mais importante etapa para garantir a persistência dos dados:

* Instalação/Servidor: Certifique-se de que o seu servidor de banco de dados “MySQL” esteja rodando.

* Criação do Schema: Crie um novo banco de dados (schema) chamado “aulajdbc.sql” (cole a query disponível na pasta “back-end” do projeto).

* Ajuste de Credenciais. Edite o arquivo de configuração da aplicação Java (“ConnectionFactory.java” na pasta backend/src/util):

* Java:
* private static final String USER = "SEUUSUARIO";
* private static final String PASS = "SUAPASSWORD";


Execute o arquivo “ApiProduto.java” pelo VS Code ou ser compilado pelo Prompt de Comando, via Maven ou Gradle e depois executar:

* No cmd:
* java -jar target/ApiProduto.java.jar

---

 3º Passo: Iniciar o Frontend (React). Em um novo terminal, navegue até “/front-end” e inicie a aplicação React:

* No cmd:
* cd front-end
* npm install react-router-dom
* npm install
* npm start

* O Frontend será iniciado em http://localhost:3000.

---


### Contribuição
* Contribuições, issues e sugestões são bem-vindas! Sinta-se à vontade para abrir um Pull Request.
