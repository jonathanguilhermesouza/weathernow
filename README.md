# WeatherNow
WeatherNow é um app que mostra a temperatura de 3 cidades definidas.

![Homepage WeatherNow](https://preview.ibb.co/kCU6v7/view_weathernow_home.png)

## Como o app funciona?
Existe uma lista default inicializada com 3 cidades no controller HomeCtrl, temos o id de cada cidade informado na lista default, caso queira trocar alguma cidade basta alterar o id (explore a API https://openweathermap.org/api e obtenha o id da cidade desejada), a cidade e sigla do Pais (estes dois são substituidos quando recuperado os dados da API, mas é bom trocar). Caso seja a primeira vez que está executando o projeto será realizada uma requisição para cada item da lista de cidades para recuperar os dados, após isto a lista é salva no local stogage por 10 minutos, caso você atualize a tela irá obter a lista salva no local storage, enquanto isso temos um timer rodando de 1 em 1 minuto, este timer chama uma função para atualizar a temperatura, porém a temperatura só será alterada caso a data hora entre a ultima atualização e a data hora atual for maior que 10. Para cada intervalo de temperatura temos uma cor, existe uma função no controller HomeCtrl que recebe a temperatura e devolve uma class css correspondente a temperatura, as cores são: azul para temperaturas baixas, laranja para temperaturas médias e vermelho para temperaturas altas. Caso ocorra algum erro na atualização de alguma cidade um botão "Try Again" é apresentado na tela para que tente recuperar a temperatura de determinada cidade.

## Tecnologias utilizadas
  O app foi desenvolvido utilizando:
1. HTML5
2. CSS3
3. AngularJS
4. SPA (Single Page Application)

## Estrutura do projeto
![Estrutura do projeto](https://image.ibb.co/kQwHnn/estrutura_de_pastas.jpg)


## Requisitos para rodar o app
  Para poder rodar o projeto em seu computador você precisa de alguns itens, são eles:
1. NodeJS e Npm
2. Git
3. Bower
4. Http-server
5. Pacotes do frontend (agularJs, angular-route)

## Instalação
1. NodeJS e Npm
>
O NodeJS é uma plataforma utilizada para rodar aplicações javascript no servidor e o Npm é o gerenciador de pacotes do NodeJs. Temos a necessidade de instalar esta plataforma pois iremos criar um servidor para rodar o projeto e também o Bower (gerencia pacotes do front end) requer o NodeJS e npm, então vamos lá instalar, para instalar basta acessar o link https://nodejs.org/en/ , baixar o instalador e realizar a instalação. 

2. Git
>
O git é um sistema para controle de versão, com ele conseguimos gerenciar nossos repositórios de códigos. Para instalar basta acessar o link https://git-scm.com/, baixar o instalador e realizar a instalação.

3. Bower
>
O Bower é resposável por instalar os pacotes utilizados no front-end como angular, angular-route e etc. Para instalar o Bower iremos executar alguns comandos, abra o cmd no windows ou terminal no macbook e digite o comando "npm install -g bower".
>
![Instalação do bower](https://image.ibb.co/e8ms2n/npm_install.png)

4. Http-server
>
Para criar um servidor local para nossa aplicação devemos instalar o pacote http-server, para isso abra o cmd no windows ou terminal no macbook e digite o comando "npm install -g http-server".
>
![Instalação do http-server](https://image.ibb.co/dWWLoS/install_httpserver.png)

5. Pacotes do frontend (agularJs, angular-route)
>
Alguns pacotes são necessários para rodar a aplicação, agora com auxilio do Bower vamos instalar os pacotes via linha de comando. Abra o cmd no windows ou terminal no macbook e acesse a pasta da sua aplicação, os comandos para instalar os pacotes são:

* bower install angular --save
>
![Instalação do angular](https://image.ibb.co/epRs2n/install_angular.png)

* bower install angular-route --save
>
![Instalação do angularJs](https://preview.ibb.co/jwq8a7/install_angular_route.png)


## Configuração
1. Baixe o projeto WeatherNow em seu computador realizando download ou através do git.
2. Obtenha uma chave de acesso da API no site OpenWeatherMap. Para obter uma chave de acesso você deve acessar o link https://openweathermap.org e criar um cadastro caso não tenha, após criar o cadastro acesse a aba API Keys e copie a chave.
>
![Obtendo chave de acesso da API](https://preview.ibb.co/dieRv7/api.png)
>  
3. Agora você deve configurar a chave de acesso da api, pasa isso localize o arquivo config.js que fica em app -> config.js,
altere o parâmetro APP_ID colocando sua chave de acesso.
>
![Configurando a chave da API](https://preview.ibb.co/dLTTa7/configurando_chave_da_api.png)
>

## Execução do projeto
Agora está fácil, para rodar o projeto abra o cmd no windows ou terminal no macbook e acesse a pasta da sua aplicação, após isto digite o comando "http-server -a localhost -p 8000".

Parâmetros
>
-a => Endereço da sua aplicação (pode ser localhost para teste)
>
-p => Porta da sua aplicação (qualquer porta que não esteja em uso)
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


