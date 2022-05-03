<div align="center">

# MemoryFlash API

**_Essa é a API desenvolvida para a aplicação mobile de MemoryFlash_**


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
- [Docker-Composer](https://docs.docker.com/compose/install/)

## Como rodar

```
$ cp -r .env.example .env
```

```
$ docker-composer up
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