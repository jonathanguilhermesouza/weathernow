(function(){
	'use strict';

	angular.module('weatherNow').service('UtilService', UtilService);

	UtilService.$inject = ['$rootScope', 'orderByFilter',];

	function UtilService($rootScope, orderBy){
		
		var vm = this;

		//functions
		vm.saveInLocalStorage = saveInLocalStorage;
		vm.getItemLocalStorage = getItemLocalStorage;
		vm.sortList = sortList;

		//Função resposável por atualizar os valores salvos no saveInLocalStorage
		function saveInLocalStorage(name, value){
			var jsonValue = JSON.stringify(value);
			
			removeItemLocalStorage();
			setItemLocalStorage();

			function removeItemLocalStorage(){
				localStorage.removeItem(name, jsonValue);
			}

			function setItemLocalStorage(){
				localStorage.setItem(name, jsonValue);
			}
		}	

		function getItemLocalStorage(name){
			return JSON.parse(localStorage.getItem(name));
		}

		function sortList(list, propertyName){
			var newList = orderBy(list, propertyName);
			//Verifica se existe algum digest em andamento e atualiza os binds
    		if(!$rootScope.$$phase)
    			$rootScope.$digest();
			return newList;
		}
	}

})();