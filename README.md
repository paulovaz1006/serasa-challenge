## Sobre o projeto
O teste tem como objetivo acurar as habilidades do candidato em resolver alguns problemas relacionados à lógica de programação, regra de negócio e orientação à objetos.

## Pré-requisitos:
- O usuário deverá ter a possibilidade de cadastrar, editar, e excluir produtores rurais.
- O sistema deverá validar CPF e CNPJ digitados incorretamente.
- A soma de área agrícultável e vegetação, não deverá ser maior que a área total da fazenda
- Cada produtor pode plantar mais de uma cultura em sua Fazenda.

## Tecnologias utilizadas
 - Node
 - Typescript
 - TypeOrm
 - PostgreSQL
 - Jest
 - Swagger

## Instalação
 - Com docker (https://www.docker.com/):
   na pasta principal tem um arquivo docker-compose, utilizar o comando:
   - docker-compose up (a aplicação ja estara disponivel após finalizar)
  
 - Sem docker:
   entrar na pasta da api e rodar os seguintes comandos:
    - npm install 
    - npm run dev
  serviço de banco de dados, será preciso instalar localmente  
  https://www.postgresql.org/  

  Comandos para test:
  - npm test

  Comando para build:
  - npm run build

## Comandos
para criar migrations: typeorm migration:create src/db/migrations/nomeDaMigration
para rodar migrations: npm run migration:run

## Docs da api
  - http://localhost:3000/api-docs



