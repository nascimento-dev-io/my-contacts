<h1 align="center">  My Contacts </h1>

<h2 align="center">
<img alt="my contacts" title="contacts" src="https://firebasestorage.googleapis.com/v0/b/web-apps-4659f.appspot.com/o/my-contacts.gif?alt=media&token=99b3c69e-9888-4908-a1e1-31d61d04b12e" />

</h2>

<p align="center">
  Aplicação web para gerenciar uma lista de contatos, você pode cadastrar, editar e excluir contatos da lista utilizando boas práticas de UI e UX. Foi desenvolvido um front end que consome uma api desenvolvida em node utilizando postgres como banco de dados.

Projeto utiliza o mínimo possível de lib's externas focado em entender os conceitos mais fundamentais do React e do Node ( WebApp criando em react e Api criado com Express ).

</p>

<strong > Aplicação criada no curso JStack do [Mateus Silva](https://github.com/maateusilva) </strong>

  <p align="center">Live: ...<p>

<p align = "center">
  <a href="#pre"> Pré-requisito </a> •
  <a href="#rodando"> Rodando projeto </a> •
  <a href="#tecnologia">Tecnologias</a> •
  <a href="#autor"> Autor </a>
</p>

<h4 align="center">
	🚧 Status 🚀 Finalizado !
</h4>

<h2 id="pre"> Pré-requisitos </h2>

---

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Docker](https://docs.docker.com/engine/install/ubuntu/).

Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

 <h2 id="rodando">🎲 Rodando o Projeto </h2>

---

```bash
# Clone este repositório
$ git clone <https://github.com/nascimento-dev-io/my-contacts>

# Acesse a pasta do projeto no terminal/cmd
$ cd my-contacts
```

Após clonar o projeto é necessário iniciar a `API` e a `WebApp` e instalar suas dependências.

### Api

```bash
# Instalação e config do postgres via docker
$ docker pull postgres

$ docker run --name pg -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -p 5432:5432 -d postgres

$ docker start pg

$ docker exec -it pg bash

# criar database e tabelas conforme arquivo scheme.sql
$ psql -U root

# -> copiar e colar no terminal os comandos do arquivo -> ( src/app/database/scheme.sql )

# Acesse a pasta do projeto web no terminal/cmd
$ cd api

# Instale as dependências
$ yarn install

# Execute a aplicação
$ yarn run dev

# O servidor iniciará na porta:
$ 3001
```

### WebApp

```bash
# Acesse a pasta do projeto web no terminal/cmd
$ cd web

# Instale as dependências
$ yarn install

# Execute a aplicação
$ yarn start

# O servidor iniciará na porta:
$ 3000
```

<h2 id="tecnologia">🛠 Tecnologias</h2>

---

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Docker](https://docs.docker.com/)
- [Postgres](https://www.postgresql.org/)
- [React](https://pt-br.reactjs.org/)
- [React Router](https://reactrouter.com/web/guides/quick-start)
- [Styled Components](https://styled-components.com/)

<h2 id="autor"> 🎙Autor</h2>

---

 <img  width="80px;" height="80px;" style="border-radius:50px;" src="https://firebasestorage.googleapis.com/v0/b/web-apps-4659f.appspot.com/o/perfil.jpg?alt=media&token=6d0c250c-8d06-44aa-b895-64f89d655962"  alt="Foto do autor"/>
 <br />
Feito por <strong> Jorge Nascimento </strong> 💻 🚀

[![Linkedin Badge](https://img.shields.io/badge/-nascimento.dev.io-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/jorge-nascimento-a465511ab/)](https://www.linkedin.com/in/jorge-nascimento-a465511ab/)
[![Gmail Badge](https://img.shields.io/badge/-nascimento.dev.io-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:nascimento.dev.io@gmail.com)](mailto:nascimento.dev.io@gmail.com)
