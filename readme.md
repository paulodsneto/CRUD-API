# CRUD API

O objetivo dessa API é avançar com meus estudos em backend. Com isso, foi feita uma API REST utilizando os principais verbos http para tratamento dos dados a serem inseridos no banco de dados. Nesse exercício também me preocupei em como os dados de acesso ao banco apareceriam no código, para isso eu usei a biblioteca dotenv que me permite alocar essas chaves de acesso num arquivo de ambiente(.env).

## A stack utilizada foi:
Javascript
 NodeJS
 Express
 MongoDB 

## As bibliotecas usadas foram: 
Dotenv
Mongoose
Nodemon

 ## Endpoints da API:
 ![image](https://img.shields.io/badge/-POST-orange) Cadastro de Pessoa
 ![image](https://img.shields.io/badge/-GET-brightgreen) Buscar Pessoas
 ![image](https://img.shields.io/badge/-GET-brightgreen) Buscar Pessoas por ID
 ![image](https://img.shields.io/badge/-PATCH-blue) Atualizar Pessoa
 ![image](https://img.shields.io/badge/-DELETE-red) Deletar pessoa
 

## Validando os endpoints no Postman: 
>Cadastro de Pessoa
![image](https://i.imgur.com/4UwLmxc.png) 

>Buscar Pessoa
![image](https://i.imgur.com/42cSqcC.png)
>Buscar Pessoa por ID 
![image](https://i.imgur.com/vlrGh3R.png)

>Remover Pessoa
![image](https://i.imgur.com/JTNx0tg.png)

## Como instalar o projeto na sua máquina? 
	$  npm install

>Para instalar as dependências do projeto

## Como rodar o projeto?
	$  npm start

> Você deve ver algo como isso no terminal: 

	nodemon ./index.js localhost 3000


