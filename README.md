
# 📢 Micro Serviço de Notificação

Micro Serviço de notificação feito com NestJS realizado no evento do Ignite feito pela [Rocketseat](https://www.rocketseat.com.br)


## 📚 Aprendizados

Esta aplicaçao não me permitiu apenas aprender mais sobre como utilizar o [NestJS](https://nestjs.com), mas como também sobre o [Prisma](https://www.prisma.io), pattern de repositórios, use cases, factory e testes unitários com [Jest](https://jestjs.io/pt-BR/)


## 🌐 Documentação da API

#### Criar notificação

```http
POST /notifications/
```

| Body   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `recipientId` | `string` | **Obrigatório**. Id do usuário |
| `content` | `string` | **Obrigatório**. Conteúdo da notificação |
| `category` | `string` | **Obrigatório**. Categoria da notificação |

#### Cancelar notificação

```http
PATCH /notifications/{id}/cancel
```

#### Ler notificação

```http
PATCH /notifications/{id}/read
```

#### Desler notificação

```http
PATCH /notifications/{id}/unread
```

#### Listar notificações de um usuário

```http
GET /notifications/from/{recipientId}
```

#### Quantidade de notificações de um usuário

```http
GET /notifications/count/from/{recipientId}
```
## 🚀 Rodando localmente

Clone o projeto

```bash
$ git clone https://github.com/SadS4ndWiCh/notifications-service
```

Entre no diretório do projeto

```bash
$ cd notifications-service
```

Instale as dependências

```bash
$ npm install
```

Inicie o servidor

```bash
$ npm run start:dev
```


## 🛠️ Rodando os testes

Para rodar os testes, rode o seguinte comando

```bash
# testes unitários
$ npm run test

# testes e2e
$ npm run test:e2e

# coverage testes
$ npm run test:cov
```

