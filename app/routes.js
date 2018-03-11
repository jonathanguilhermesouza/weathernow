(function (){
	'use strict'

	angular.module('weatherNow').config(function($routeProvider){
		$routeProvider
		.when('/', {
			controller: 'HomeCtrl',
			controllerAs: 'vm',
			templateUrl: 'app/views/index.html'
		});
	});
})();