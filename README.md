# WeatherNow
WeatherNow é um app que mostra a temperatura de 3 cidades definidas.

![Homepage WeatherNow](https://preview.ibb.co/kCU6v7/view_weathernow_home.png)

## Tecnologias utilizadas
  O app foi desenvolvido utilizando:
1. HTML
2. HTML5
3. CSS
4. CSS3
5. AngularJS
5. SPA (Single Page Application)

## Estrutura do projeto
![Estrutura do projeto](https://image.ibb.co/g1tY8S/estrutura_do_projeto.png)


## Requisitos para rodar o app
  Para poder rodar o projeto em seu computador você precisa de alguns itens, são eles:
1. NodeJS e Npm
2. Git
3. Bower
4. Http-server
5. Pacotes do frontend (jquery, agularJs, angular-route)

## Instalação
1. NodeJS e Npm
>
O NodeJS é uma plataforma utilizada para rodar aplicações javascript no servidor e o npm é o gerenciador de pacotes do NodeJs.Temos a necessidade de instalar esta plataforma pois iremos criar um servidor para rodar o projeto e também o Bower (gerencia pacotes do front end) requer o NodeJS e npm, então vamos lá instalar, para instalar basta acessar o link https://nodejs.org/en/ , baixar o instalador e realizar a instalação. 

2. Git
>
O git é um sistema para controle de versão, como ele conseguir gerenciar nossos repositórios de códigos. Para instalar basta acessar o link https://git-scm.com/, baixar o instalador e realizar a instalação.

3. Bower
>
O Bower é resposável por instalar os pacotes utilizados no front-end como angular, jquery e etc. Para instalar o Bower iremos utilizar comandos, abra o cmd no windows ou terminal no mackbook e digite o comando "npm install -g bower".
>
![Instalação do bower](https://image.ibb.co/e8ms2n/npm_install.png)

4. Http-server
>
Para criar um servidor local para nossa aplicação devemos instalar o pacote http-server, para isso abra o cmd no windows ou terminal no mackbook e digite o comando "npm install -g http-server".
>
![Instalação do http-server](https://image.ibb.co/dWWLoS/install_httpserver.png)

5. Pacotes do frontend (jquery, agularJs, angular-route)
>
Alguns pacotes são necessários para rodar a aplicação, agora com auxilio do Bower vamos instalar os pacotes via linha de comando. Abra o cmd no windows ou terminal no mackbook e acesse a pasta da sua aplicação, os comandos para instalar os pacotes são:

* bower install jquery --save
>
![Instalação do jquery](https://image.ibb.co/dyGya7/install_jquery.png)

* bower install angular --save
>
![Instalação do angular](https://image.ibb.co/epRs2n/install_angular.png)

* bower install angular-route --save
>
![Instalação do angularJs](https://preview.ibb.co/jwq8a7/install_angular_route.png)


## Configuração
1. Baixe o projeto WeatherNow em seu computador realizando download ou através do git.
2. Obtenha uma chave de acesso da API no site OpenWeatherMap. Para obter uma chave de acesso você deve acessar o link https://openweathermap.org e criar um cadastro, após criar o cadastro acesse a aba API Keys e copie a chave.
>
![Obtendo chave de acesso da API](https://preview.ibb.co/dieRv7/api.png)
>  
3. Agora você deve configurar a chave de acesso da api, pasa isso localize o arquivo config.js que fica em app -> config.js,
altere o parâmetro APP_ID colocando sua chave de acesso.
>
![Configurando a chave da API](https://preview.ibb.co/dLTTa7/configurando_chave_da_api.png)
>

## Execução do projeto
Agora está fácil, abra o cmd no windows ou terminal no mackbook e acesse a pasta da sua aplicação, após isto digite o comando "http-server -a localhost -p 8000".

Parâmetros
>
-a => Endereço da sua aplicação
>
-p => Porta da sua aplicação
>
![Rodando a aplicação](https://preview.ibb.co/m26EF7/rodando_a_aplicacao.png)

## Preview
1. Desktop
>
![Homepage WeatherNow](https://preview.ibb.co/kCU6v7/view_weathernow_home.png)
>
2. Mobile
>
![Homepage WeatherNow](https://image.ibb.co/hKafoS/visualizacao_versao_resuzida.png)


