<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="200" alt="Nest Logo" /></a>
</p>

<h1 align="center">
    🚀 Library Book
</h1>
<p align="center">Backend da aplicação Ioasys Book</p>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=node&message=14.15.1&color=green&logo=node.js" />
  <img src="https://img.shields.io/static/v1?label=typescript&message=4.0.3&color=blue&logo=typescript" />
  <img src="https://img.shields.io/badge/last%20commit-october-orange" />
  <img src="https://img.shields.io/badge/license-MIT-success"/>
</p>

<p align="center">
  <a href="#-features">Features</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-pré-requisitos">Pré-Requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-rodando-o-back-end-servidor">Backend</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-bibliotecas">Bibliotecas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Lincença</a>
</p>

<h3 align="center"> 
🚧  Finalizado  🚧
</h3>

### 📌 Sobre 
Aplicação para estudos do framework NestJS, e para criação do backend do front da aplicação [Ioasys Book](https://github.com/gabriel-nt/ioasys-books).

### 📎 Features

#### Livros
- [x] Criação de livro
- [x] Deleção de um livro
- [x] Atualização de um livro
- [x] Listagem de livros, com paginação e filtros

#### Categorias
- [x] Criação de categoria
- [x] Deleção de um categoria
- [x] Atualização de um categoria
- [x] Listagem de categorias com filtro

#### Usuários
- [x] Autenticação
- [x] Criação de Perfil
- [x] Atualização de Perfil

### ⚙ Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e/ou [Yarn](https://https://yarnpkg.com/)
Também, será necessário ter o [Docker](https://www.docker.com/) instalado e configurado em sua máquina.
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando o Back End (servidor)

```bash
# Instale as dependências
$ npm install ou yarn

# Rode as migrations
$ yarn typeorm migration:run

# Execute a aplicação em modo de desenvolvimento
$ yarn start:dev ou npm run start:dev

# Execute a aplicação em modo de produção
$ yarn start:prod ou npm run start:prod

# O servidor inciará na porta:3000 - acesse <http://localhost:300>
```
* Obs: Para executar os backend, crie um banco de dados.

### 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- NestJs
- TypeScript
- Postgres

### 📕 Bibliotecas

Esse projeto foi desenvolvido com o auxílio das seguintes libs:

- Express
- TypeORM
- jwt
- dayjs

### 📙 Arquitetura do Projeto

Para uma melhorar estrutura de projetos utilizamos das seguintes fundamentos:

- DDD
- SOLID

###  📘 Padrão de Código

Para padronizar a escrita do código, utilizamos as seguinte ferramentas:

- Eslint
- Prettier
- EditorConfig

### 📝 Licença

Esse projeto está sob a licença MIT.

<hr/>

Feito por Gabriel Teixeira
