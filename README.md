# XBOX LIVE - Projeto DO MÓDULO 4

O projeto é inspirado na Xbox Live, plataforma da Microsoft para o console de videogame Xbox.
O objetivo é criar uma API backend com usuários, perfis, jogos e gêneros para que usuários possam se cadastrar, selecionar diferentes perfis (semelhante ao sistema de perfis da Netflix) e acessar os jogos disponíveis.

> Exemplo:
>
> Assim que o login for feito, a tela principal exibirá os jogos disponíveis, seguindo os exemplos a seguir. É possível favoritar os jogos, sendo que a lista de jogos favoritos é individual para cada perfil. Esses jogos irão compor a primeira sessão da página, sob o título de "Jogos Favoritos". Logo após essa seção, temos as seções dos outros jogos, classificados por gênero.

## Pré-requisitos
Backend com a estrutura básica seguinte:

API backend com usuários, perfis, jogos e gêneros.
 - Estrutura da Entidade: Usuários (Users)
 - Name;
 - Email;
 - Password;
 - CPF;
 - isAdmin;

Estrutura da Entidade: Perfis (Profiles)
 - Title;
 - ImageURL;
 - Estrutura da Entidade: Jogos (Games)
 - Title;
 - CoverImageUrl;
 - Description;
 - Year;
 - ImdbScore (0 a 5);
 - TrailerYouTubeUrl;
 - GameplayYouTubeUrl;

Estrutura da Entidade: Gêneros (Genres)
 - Name;
 - Relações
 - Um usuário x muitos perfis;
 - Muitos jogos x muitos gêneros;
 - Muitos perfis x muitos jogos (jogos favoritos);

Endpoints
 - [Create] Usuários (não precisa de autenticação);
 - [AUTH] [GET] Homepage: lista de jogos favoritos; lista de jogos, classificados por gênero;
 - [AUTH] [CRUD] Perfis; Favoritar jogo;
 - [AUTH] [ADMIN] [CRUD] Usuários (apenas admins podem gerenciar usuários);
 - [AUTH] [ADMIN] [CRUD] Jogos (apenas admins podem criar jogos);
 - [AUTH] [ADMIN] [CRUD] Gêneros (apenas admins podem criar gêneros).

Requisitos
 - Validação de dados em todos os endpoints com class-validator;
 - Status Code corretos em todos os endpoints:
 - 200, 201, 400, 404, etc.
 - Persistência de Dados no SQL com Prisma;
 - Formatação do código utilizando o Prettier/ESLint;
 - Documentação dos endpoints com Swagger;
 - Diagrama de relacionamentos do banco de dados;
 - Cors habilitado;
 - Deploy do projeto;
 - Deploy do banco de dados.


É obrigatório estar previamente instalado:

> - **Node** com versão superior ou igual que 16.15.0 - [Node Download](https://nodejs.org/pt-br/download/)
> - **NPM** com versão superior ou igual que 8.0.0 - [Npm Download](https://www.npmjs.com/package/download)
> - **Visual Studio Code** com versão superior ou igual que 1.67.2 - [Visual Studio Code Download](https://code.visualstudio.com/download)
> - **Thunder Client** com versão superior ou igual que 11.14.00 - [Thunder Client Download](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client)
> - **PostgreSQL** com versão superior ou igual que 1.67.2 - [PostgreSQL Downloads](https://www.postgresql.org/download/)


## Instalação



> Clone esse projeto em seu computador com o comando:
> ```bash
$ git clone https://github.com/astolfovalentim/xboxlive-mod4.git
```

> Acesse a pasta do projeto seu terminal:
> ```
> 	cd [Nome da pasta do seu projeto]
> ```


> Instalação - digite o seguinte comando:
> ```bash
$ npm install
```

> Instalação -do NestJS CLI:
> ```bash
$ npm i -g @nestjs/cli
```


## Execução

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Testes

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
> A aplicação estará disponível para visualização em seu navegador, caso isso não aconteça automaticamente, abra o navegador no seguinte endereço: _localhost:3333_


## Links

Mesmo que as informações possam estar sendo apresentadas no seu código, pode ocorrer de algumas pessoas não terem total entendimento sobre o que foi proposto ou determinados termos técnicos, você pode incluir um resumo dos links mais úteis para leitura dessas termos, por exemplo.

> Exemplo: 
> - [Guia de Markdown](https://docs.pipz.com/central-de-ajuda/learning-center/guia-basico-de-markdown#open)
> - [Como formatar o Readme?](https://medium.com/@raullesteves/github-como-fazer-um-readme-md-bonit%C3%A3o-c85c8f154f8#:~:text=md%20%C3%A9%20um%20arquivo%20markdown,tags%20tamb%C3%A9m%20funcionam%2C%20veremos%20adiante.&text=Basta%20copiar%20o%20que%20o,e%20colar%20no%20README.md.)


## Autor

> - **Astolfo Valentim** - [Github](https://github.com/astolfovalentim)


## Licença 
> 
> MIT License (MIT)

