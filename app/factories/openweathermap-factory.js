(function(){
	'use strict';

	angular.module('weatherNow').factory('OpenWeatherMapFactory', OpenWeatherMapFactory);

	OpenWeatherMapFactory.$inject = ['$http', 'SETTINGS'];

	function OpenWeatherMapFactory($http, SETTINGS){
		return {
			getWeatherCityById : getWeatherCityById,
			getWeatherCityByName : getWeatherCityByName
		}

		function getWeatherCityById(idCity){
			return $http.get('http://api.openweathermap.org/data/2.5/weather?id=' + idCity + '&units=metric&appid=' + SETTINGS.APP_ID);
		}

		function getWeatherCityByName(city, country){
			return $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + ',' + country + '&appid=' + SETTINGS.APP_ID);
		}
	}

})();