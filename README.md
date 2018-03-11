# WeatherNow
WeatherNow é um app que mostra a temperatura de 3 cidades definidas.

## Tecnologias utilizadas
  O app foi desenvolvido utilizando:
1. HTML
2. HTML5
3. CSS
4. CSS3
5. AngularJS
5. SPA (Single Page Application)

## Estrutura de pastas
* app
  * controllers
  * directives
  * specs
  * services
  * views
  * styles
  * images
  * factories
* bower_components
* node_modules


## Requisitos para rodar o app
  Para poder rodar o projeto em seu computador você precisa de alguns itens, são eles:
1. NodeJS e Npm
2. Git
3. Bower
4. Http-server
5. Pacotes do frontend (jquery, agularJs, angular-route)

## Instalação
1. NodeJS e Npm
Como o Bower (gerencia pacotes do front end) requer o NodeJS e npm vamos lá instalar, para instalar basta acessar https://nodejs.org/en/ e baixar o instalador e realize a instalação. 

2. Git
Acesse o link https://git-scm.com/, baixe o instalador e realize a instalação.

3. Bower
Para instalar o Bower iremos utilizar comandos, abra o cmd no windows ou terminal no mackbook e digite o comando "npm install -g bower".

4. Http-server
Para criar um servidor local para nossa aplicação devemos instalar o pacote http-server, para isso abra o cmd no windows ou terminal no mackbook e digite o comando "npm install -g http-server".

5. Pacotes do frontend (jquery, agularJs, angular-route)
Alguns pacotes são necessários para rodar a aplicação, agora com auxilio do Bower vamos instalar os pacotes via linha de comando. Abra o cmd no windows ou terminal no mackbook e acessa a pasta da sua aplicação, os comandos são:

* bower install jquery --save
* bower install angular --save
* bower install angular-route --save

## Configuração
1. Baixe o projeto WeatherNow em seu computador.
2. Obter uma chave de acesso da API do site OpenWeatherMap
  Para obter uma chave de acesso você deve acessar o link https://openweathermap.org e criar um cadastro.
  
  imagem
  
  Agora você deve configurar a chave de acesso da api, pasa isso localize o arquivo config.js que fica em app -> config.js,
altere o parâmetro APP_ID colocando sua chave de acesso.

imagem

## Execução do projeto
Agora está fácil, abra o cmd no windows ou terminal no mackbook e acessa a pasta da sua aplicação, após isto digite o comando "http-server -a localhost -p 8000".

parâmetros
-a => Endereço da sua aplicação
-p => Porta da sua aplicação



