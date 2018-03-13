describe('Unit test Controller', function(){

	beforeEach(module('weatherNow'));

	var $controller;	
	var vm;

	/*
		OBS: No activate() do controller está sendo chamado método que faz requisições a API, 
		ao comentar a chamada dos métodos em ativate() funciona, ao decomentar ocorre o erro Unexpected request: GET http://api...,
		não consegui solucionar a tempo este problema e prosseguir criando testes automatizados
	*/

	beforeEach(inject(function(_$controller_,_$rootScope_){
		$controller = _$controller_;
 		$scope = _$rootScope_.$new();
 		vm = $controller('HomeCtrl',{ $scope: $scope});
	}));

	it('Service exist?', function(){
		expect($controller).toBeDefined();
	});

	it('vm is defined in HomeCtrl?', function(){
		expect(vm).toBeDefined();
	});

});