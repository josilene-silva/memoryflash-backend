![GitHub top language](https://img.shields.io/github/languages/top/josilene-silva/memoryflash-backend?style=flat-square&logo=TypeScript)
![GitHub package.json version (subfolder of monorepo)](https://img.shields.io/github/package-json/v/josilene-silva/memoryflash-backend/main?style=flat-square&logo=npm&color=CB3837)
![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/josilene-silva/memoryflash-backend?style=flat-square&logo=github&color=red)

[![eslint](https://img.shields.io/badge/eslint-7.32.0-4b32c3?style=flat-square&logo=eslint)](https://eslint.org/)
[![airbnb-style](https://flat.badgen.net/badge/style-guide/airbnb/ff5a5f?icon=airbnb)](https://github.com/airbnb/javascript)
[![prettier](https://img.shields.io/badge/prettier-2.5.1-%23F7B93E?style=flat-square&logo=prettier)](https://github.com/airbnb/javascript)
[![TypeScript](https://img.shields.io/badge/typescript-4.6.2-%233178C6?style=flat-square&logo=Typescript)](https://www.typescriptlang.org/)
[![Express](https://img.shields.io/badge/express-4.17.3-000?style=flat-square&logo=express)](https://expressjs.com/)
[![IO Redis](https://img.shields.io/badge/ioredis-5.0.3-%23DC382D?style=flat-square&logo=redis)](https://github.com/luin/ioredis)
[![JSON Web Tokens](https://img.shields.io/badge/jsonwebtoken-8.5.1-%23000000?style=flat-square&logo=JSONWebTokens)](https://github.com/auth0/node-jsonwebtoken)
[![TypeORM](https://img.shields.io/badge/typeorm-0.2.45-%23262627?style=flat-square&logo=Typescript)](https://typeorm.io/)
[![PostgreSQL](https://img.shields.io/badge/pg-8.7.3-%234169E1?style=flat-square&logo=PostgreSQL)](https://www.postgresql.org/)
[![Docker](https://img.shields.io/badge/docker-docker--compose-%232496ED?style=flat-square&logo=Docker)](https://www.docker.com/)



<div align="center">

# MemoryFlash API

[![Heroku](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=discord&logoColor=white)](https://memoryflash-api.herokuapp.com)

**_Essa é a API desenvolvida para a aplicação mobile MemoryFlash_**


O **MemoryFlash** é uma aplicação de _flashcards_, cartões com perguntas e respostas, que permite ao usuário criar cartões de estudo, praticar, acompanhar seu progresso, compartilhar e obter flashcards de outros usuários.

</div>


## Navegação

- [Requisitos](#requisitos)
- [Como rodar](#como-rodar)
- [Tabelas](#tabelas)
- [Funcionalidades](#funcionalidades)
  - [Accounts](#accounts)
  - [Practices](#practices)
  - [Sets](#sets)
- [Rotas](#rotas)

## Requisitos

Para rodar a aplicação, você precisará ter instalado na sua máquina:

- [Docker](https://www.docker.com/)
- [Docker-Compose](https://docs.docker.com/compose/install/)

## Como rodar

```
$ cp -r .env.example .env
```

```
$ docker-compose up
```


## Tabelas

|Tabela|Descrição
|:---|:---:
|`users`|*Tabela de usuários*
|`sets`|*Tabela de conjunto de cartões*
|`cards`|*Tabela de cartões*
|`categories`|*Tabela de categorias*
|`practices`|*Tabela de práticas*

## Funcionalidades

### **Accounts**

- [x] Cadastrar usuário
- [x] Logar usuário
- [ ] Listar dados do usuário logado
- [ ] Editar dados do usuário logado
- [ ] Deslogar usuário
### **Practices**
- [x] Atribuir nível de dificuldade aos cartões
- [x] Criar prática
- [x] Listar dados de uma prática
- [x] Listar dados de todas as práticas do conjunto
### **Sets**

- [x] Criar cartão
- [x] Criar categoria
- [x] Criar conjunto

- [x] Deletar cartão
- [x] Deletar conjunto

- [x] Listar conjunto (com dados da categoria, cartões e práticas)
- [x] Listar conjuntos  (com dados da categoria, cartões e práticas)
- [x] Listar categorias
- [x] Listar cartão

- [x] Atualizar cartão
- [x] Atualizar categoria
- [x] Atualizar conjunto


## Rotas

|Rota|Método HTTP|Descrição|Requer autentificação
|:---|:---:|:---:|:---
|`/users`|`POST`|Criação de usuário|Não
|`/login`|`POST`|Login de usuário|Não
|`/categories`|`POST`|Cadastro de categoria|Não
|`/categories`|`GET`|Listagem de todas as categorias|Não
|`/categories/:id`|`PUT`|Atualização da categoria|Não
|`/sets`|`POST`|Cadastro de conjunto|Sim
|`/sets`|`GET`|Listagem de todos os conjunto|Sim
|`/sets/:id`|`GET`|Listagem de um conjunto|Sim
|`/sets/:id`|`PUT`|Atualização de conjunto|Sim
|`/sets/:id`|`DELETE`|Remoção de conjunto|Sim
|`/cards`|`POST`|Cadastro de cartão|Sim
|`/cards/:id`|`GET`|Listagem de um cartão|Não
|`/cards/:id`|`PUT`|Atualização de cartão|Não
|`/cards`|`PACTH`|Atualização do nível de dificuldade de cartões|Não
|`/cards/:id`|`DELETE`|Remoção de cartão|Não
|`/practices`|`POST`|Criação da prática|Sim
|`/practices/:id`|`GET`|Listagem de uma prática|Não