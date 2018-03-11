(function(){
	
	'use strict';
	angular.module('weatherNow').controller('HomeCtrl', HomeCtrl);

	HomeCtrl.$inject = ['OpenWeatherMapFactory', '$interval','UtilService', 'orderByFilter','$scope'];

	function HomeCtrl(OpenWeatherMapFactory, $interval, UtilService, orderBy, $scope) {

		var vm = this;

		//functions
		vm.getWeatherCityById = getWeatherCityById;

		//variáveis
		var listCitiesDefault = [
			{
				id: 3421319,
				name: 'Nuuk',
				country: 'GL',
				orderDesktop: 1,
				orderMobile: 2,
				updatedAt: new Date(),
				humidity: 0,
				pressure: 0,
				temperature: 0,
				isDestaque: false,
				containsError: false,
				isLoad: false,
			},
			{
				id: 3445709,
				name: 'Urubici',
				country: 'BR',
				orderDesktop: 2,
				orderMobile: 1,
				updatedAt: new Date(),
				humidity: 0,
				pressure: 0,
				temperature: 0,
				isDestaque: true,
				containsError: false,
				isLoad: false
			},
			{
				id: 184745,
				name: 'Nairobi',
				country: 'KE',
				orderDesktop: 3,
				orderMobile: 3,
				updatedAt: new Date(),
				humidity: 0,
				pressure: 0,
				temperature: 0,
				isDestaque: false,
				containsError: false,
				isLoad: false
			}
		];

		vm.listCities = [];
		var listCityLocalStorage = 'CITY_LIST';
		var fieldOrderByMobile = 'orderMobile';
		var fieldOrderByDesktop = 'orderDesktop';

		activate();

		/*Aciona alguns métodos que populam valores necessários na view*/
		function activate(){
			getWeatherAllCity();
			activateTimer();
			checkResolutionScreen();
		}	

		/*Identifica alteração na resolução de tela para alterar o tipo de ordenação
		  orderDesktop ou orderMobile*/
		window.addEventListener('resize', function(){
    		checkResolutionScreen();
		});

		/*Verifica a resolução da tela para realizar a ordenação da lista de cidades*/
		function checkResolutionScreen(){
			if(window.innerWidth <= 600)
				vm.listCities = UtilService.sortList(vm.listCities, fieldOrderByMobile);
			else
				vm.listCities = UtilService.sortList(vm.listCities, fieldOrderByDesktop);
		}

		/*Ativa o timer que aciona o método resposável a cada 1 minuto para verificar se é hora de atualizar alguns valores na view*/
		function activateTimer(){
			$interval(updateWeather, 60000);
		}

		/*Função que popula os valores da view (temperatura e etc de 3 cidades), a princípio tenta recuparar dados do local storage,
			caso não exista nada no localStorage*/
		function getWeatherAllCity(){

			var listCitiesFromLocalStorage = UtilService.getItemLocalStorage(listCityLocalStorage);
			var isInvalidList = angular.isUndefined(listCitiesFromLocalStorage) || listCitiesFromLocalStorage === null;
			
			if(!isInvalidList)
				vm.listCities = angular.copy(listCitiesFromLocalStorage);
			else {
				vm.listCities = angular.copy(listCitiesDefault);
				angular.forEach(vm.listCities, function(city, key){  
					getWeatherCityById(city);
				});
			}
		}

		/*A cada 10 minutos é atualizado automaticamente os valores de cada cidade*/
		function updateWeather(){
			angular.forEach(vm.listCities, function(city, key){
				var dif = new Date() - new Date(city.updatedAt);
				var difMinutes = ( dif / 60000 ) % 60; 
				if(difMinutes >= 10){
					city.isLoad = false;
					getWeatherCityById(city)
				}
			});			
		}

		/*Função externada para view, caso ocorra algum erro o user pode clicar no botão "Try Again" 
			para recuperar os valores de determinada cidade*/
		function getWeatherCityById(city){

			city.isLoad = false;
			city.containsError = false;

			OpenWeatherMapFactory.getWeatherCityById(city.id)
            .then(function onSuccess(response) {                	
                city.name = response.data.name,
				city.country = response.data.sys.country,					
				city.humidity = response.data.main.humidity,
				city.pressure = response.data.main.pressure,
				city.temperature = response.data.main.temp;
				city.isLoad = true;
				city.updatedAt = new Date();
				UtilService.saveInLocalStorage(listCityLocalStorage, vm.listCities);
            })
            .catch(function onError(response) {
                city.containsError = true;
                city.isLoad = true;
                city.updatedAt = new Date();
                UtilService.saveInLocalStorage(listCityLocalStorage, vm.listCities);
            });
		}	
	}
})();