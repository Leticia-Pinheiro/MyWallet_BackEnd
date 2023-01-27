# My Wallet

<p align="center">
  <img height=300 src="https://www.trusselltrust.org/wp-content/uploads/sites/2/2020/11/tfc-wallet-icon@2x.png">
</p>
<h1 align="center">
  My Wallet
</h1>
<div align="center">

  <h3>Ferramentas</h3>
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" height="30px"/>  
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="30px"/>  
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express.js&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white">
  
</div>

<br/>

# Descrição

My Wallet é um sistema de gerenciamento de finanças pessoais, onde você controla seus ganhos e gastos.

</br>

## Características

-   Cadastro de usuário e Login;
-   Controle de entradas e saídas financeiras;


</br>

## Referências da API

### AUTENTICAÇÃO

### Cadastro


```http
POST /signUp
```

#### Request:


| Body         | Type     | Description                              |
| :------------| :------- | :--------------------------------------- |
| `name` | `string`| **Required**. Nome do usuário                    |
| `email` | `string`| **Required**. Email do usuário                    |
| `password`  | `string`| **Required**. Senha com no mínimo 8 caracteres  |



####

#

</br>


### Login


```http
POST /signIn
```

#### Request:


| Body         | Type     | Description                              |
| :------------| :------- | :--------------------------------------- |
| `email` | `string`| **Required**. Email do usuário                    |
| `password`  | `string`| **Required**. Senha com no mínimo 8 caracteres
 |

####

#### Response:

```json
{
	"token": "jasonwebtoken (JWT)",
}
```

#

### REGISTROS

### Adicionar registro

```http
POST /record
```

#### Request:

####

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authentication` | `string` | **Required**. token |

`Authorization format: Bearer jsonwebtoken`

####

| Body   | Type       | Description             |
| :----- | :--------- | :---------------------- |
| `userId`           | `number` | **Required**. Id do usuário |
| `value`         | `number` | **Required**. Valor da transição |
| `description` | `string` | **Required**. Descrição da transição|
| `date` | `string` | **Required**. Data da transição|
| `type`           | `string` | **Required**. 'incoming' ou 'outgoing |
| `category`           | `string` | **Required**. Categoria do gasto ou ganho |

#



### Buscar registros

```http
GET /records/:userId
```

#### Request:

####

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authentication` | `string` | **Required**. token |

`Authorization format: Bearer jsonwebtoken`

####

#

#### Response:

```json
 [
  {
    "id": 1,
    "userId": 1,
    "value": 100000,
    "description": "Salário de dezembro",
    "date": "02/12",
    "type": "incoming",
    "category": "Salário"
  },
  {
    "id": 2,
    "userId": 1,
    "value": 1000,
    "description": "Padaria",
    "date": "03/12",
    "type": "outgoing",
    "category": "mercado"
  }
]
```

#


## Variáveis de Ambiente

Para executar este projeto, você precisará adicionar as seguintes variáveis ​​de ambiente ao seu arquivo .env

`DATABASE_URL = postgres://UserName:Password@Hostname:5432/DatabaseName`

`PORT = number #recommended:5000`

`TOKEN_SECRET_KEY=suasenhasecreta`

`TOKEN_EXPIRES_IN=1d`


</br>

## Execute Localmente

Clone o projeto

```bash
  git clone https://github.com/Leticia-Pinheiro/MyWallet_BackEnd
```

Vá para o diretório do projeto

```bash
  cd MyWallet_BackEnd/
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm start
```

</br>

## Autora

Letícia Gomez Pinheiro 
<p>Linkedin: https://www.linkedin.com/in/leticia-pinheiro-33354a1b6/</p>
<p>GitHub: https://github.com/Leticia-Pinheiro</p>
<br/>

#