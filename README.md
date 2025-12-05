# Agenda de Eventos 📅

Este projeto é uma aplicação web desenvolvida como parte de um trabalho acadêmico. Trata-se de uma agenda pública de eventos onde os usuários podem visualizar os próximos compromissos, e administradores podem gerenciar (criar e excluir) eventos.

## 💻 Sobre o Projeto

A aplicação foi construída utilizando **ReactJS** para o frontend e **Firebase** como Backend-as-a-Service (BaaS) para autenticação e banco de dados em tempo real.

### Funcionalidades Principais

* **Visualização Pública**: A página inicial lista todos os eventos cadastrados, ordenados por data, mostrando título, descrição, local e data.
* **Autenticação**: Sistema de Login e Registro de novos usuários utilizando E-mail e Senha via Firebase Authentication.
* **Banco de Dados em Tempo Real**: Os dados são armazenados e recuperados do Cloud Firestore.

## 🚀 Tecnologias Utilizadas

O projeto foi desenvolvido com as seguintes tecnologias e bibliotecas:

* **ReactJS** (v18)
* **Firebase** (v11) - Firestore & Authentication
* **React Router Dom** (v6) - Navegação e rotas
* **React Toastify** - Notificações visuais
* **React Icons** - Ícones

## 📂 Estrutura do Projeto

* `src/pages/Home`: Página pública com a listagem de eventos.
* `src/pages/Register`: Página de login e cadastro de usuários.
* `src/pages/Admin`: Painel de controle para gestão de eventos.
* `src/routes`: Configuração das rotas e proteção de rotas privadas.
* `src/firebaseConnection.js`: Configuração da conexão com o Firebase.

## 📦 Como rodar o projeto

### Pré-requisitos

Certifique-se de ter o **Node.js** instalado em sua máquina.

### Passo a passo

1.  **Clone o repositório**
    ```bash
    git clone [https://github.com/seu-usuario/agenda-eventos.git](https://github.com/seu-usuario/agenda-eventos.git)
    cd agenda-eventos
    ```

2.  **Instale as dependências**
    ```bash
    npm install
    ```

3.  **Configuração do Firebase**
    O projeto já possui um arquivo de configuração em `src/firebaseConnection.js`. Caso deseje usar seu próprio banco de dados, crie um projeto no [Console do Firebase](https://console.firebase.google.com/), ative o **Firestore** e o **Authentication** (Email/Senha), e substitua as credenciais no arquivo `src/firebaseConnection.js`.

4.  **Inicie o servidor de desenvolvimento**
    ```bash
    npm start
    ```

5.  **Acesse a aplicação**
    Abra seu navegador em `http://localhost:3000`.


