# Grouping

Plataforma de estudos para o Hacking.Help 2020

## Como rodar

### Front-end

1 - Rode o comando `yarn install` para instalar as dependências do projeto.<br>
2 - Inicie com `yarn start`.<br>
3 - Configure a URL da API na pasta `src/services/api.js`<br>

### Back-end

1 - O banco de dados é Postgres, suba-o na sua máquina e configure os dados de conexão na pasta `src/config/database.js` da API<br>
2 - Com o banco rodando, instale as dependências com o comando `npm i`<br>
3 - Após isso, você precisa instalar a Sequelize CLI (https://teamtreehouse.com/library/install-and-use-sequelize-cli)<br>
4 - Rode `npx sequelize-cli db:migrate` para a criação das tabelas<br>
5 - Rode `npx sequelize-cli db:seed:all` para a inserção dos dados genéricos<br>
6 - Rode `npm run dev` para subir a API na porta configurada (padrão: 3333)<br>
