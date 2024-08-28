## Template Node Express

Este é um projeto básico de API RESTful usando Express e TypeScript. O objetivo é fornecer uma estrutura sólida para desenvolver APIs com TypeScript, incluindo funcionalidades básicas como paginação e integração com MongoDB usando Mongoose.

E também ter sempre uma base de conhecimento para projetos futuros 😉

### Indíce

- [Tecnologias](#tecnologias)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Uso](#uso)
- [Autor](#autor)

### Tecnologias

![Node.js](https://img.shields.io/badge/-Node.js-8CC84C?style=flat-square&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/-TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)
![Express](https://img.shields.io/badge/-Express-000000?style=flat-square&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)

### Instalação

```bash
# Clone este repositório
$ git clone https://github.com/fabricio-araujoo/template-node-express.git

# Acesse a pasta do projeto no terminal/cmd
$ cd template-node-express

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta:3000 - acesse <http://localhost:3000/>
```

### Configuração

**Configure o Ambiente**

Copie o arquivo .env.example para .env e ajuste as variáveis de ambiente conforme necessário.

```bash
# Cria um arquivo '.env' como cópia do '.env.example'
$ cp .env.example .env
```

Configure as variáveis de ambiente no .env, como:

```bash
MONGO_URI=mongodb://localhost:27017/seu_banco # url de conexão do mongo
PORT=3000 # porta que o projeto vai abrir
```

**Compilar o TypeScript**

O projeto já inclui scripts para compilar o TypeScript e executar o servidor. Não é necessário compilar manualmente a menos que queira.

### Estrutura do Projeto

**_Ports and Adapters_**

Também chamado de arquitetura hexagonal, a arquitetura de **Portas e Adaptadores** é um padrão de arquitetura que visa a criação de componentes de aplicação fracamente acoplados que podem ser facilmente conectados ao seu ambiente de software por meio de portas e adaptadores.

### Uso

**Inicie o servidor**

```bash
$ npm run dev
```

**Acesse a API**

A API estará disponível em http://localhost:3000 (ou na porta configurada em .env).

**Faça requisições**

Utilize ferramentas como Postman ou curl para testar os endpoints da API.

### Autor

Feito com ❤️ por Fabrício Araújo!!

Entre em contato!

[![Linkedin](https://img.shields.io/badge/-fabricioapereira-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/fabricioapereira/)](https://www.linkedin.com/in/fabricioapereira/)
[![Gmail](https://img.shields.io/badge/-fabricioaraujo051@gmail.com-FF0000?style=flat-square&logo=Gmail&logoColor=white&link=mailto:fabricioaraujo051@gmail.com)](mailto:fabricioaraujo051@gmail.com)
[![GitHub](https://img.shields.io/badge/-fabricio--araujoo-000000?style=flat-square&logo=GitHub&logoColor=white&link=https://github.com/fabricio-araujoo)](https://github.com/fabricio-araujoo)
