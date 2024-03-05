<h1>Aura Api</h1>

It's a RESTful API built with NodeJS + Express + MongoDB that receives, process and delivers all the data from the frontend through Restful APIs.

## Tecnologias utilizadas

- Node.js
- TypeScript
- Express
- MongoDB

## Conceitos utilizados

- SOLID
- Injeção de Dependência (Dependency Injection)
- Repository Pattern

## Entidades

<pre>
User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}</pre>

## Rotas

- GET /users - retorna os usuários salvos no banco
- POST /users - cria um usuário
- PATCH /users/:id - atualiza um usuário
- DELETE /users/:id - deleta um usuário

## Arquitetura

![Arquitetura](https://imgur.com/k5mXFoZ.png)

<h4 align="center">João Vitor Dadas, 2024.™</h4>
