# Grouping

Plataforma de estudos para o Hacking.Help 2020

## Como rodar

1 - Rode o comando `yarn install` para instalar as dependências do projeto.<br>
2 - Inicie com `yarn start`.<br>

## Instalando pacotes

O Yarn usa o comando `yarn add <nome-da-dependencia>` para instalar novos pacotes.

## Adicionando uma nova tela

1 - Crie o componente da página na pasta `pages`<br>
2 - Crie os componentes que compõem a página na pasta `components` e importe-os. Componentes devem ser pastas contendo os arquivos `index.jsx` (estrutura) e `styles.css` (estilos). Praticamente não há estilos globais.<br>
3 - Exponha-o adicionando uma rota no arquivo `Routes`<br>
