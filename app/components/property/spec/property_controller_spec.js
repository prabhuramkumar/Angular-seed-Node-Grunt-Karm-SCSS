define(['propertyModule'], function(){
	describe('#porpertyListController', function(){
	    beforeEach(module('propertyModule'));
	    var ctrl, scope, diferred, url, rootScope, state, data, propertyController;
	    data = {
	            "results": [
	                {
	                    "name": "property1",
	                    "id": "4"
	                }
	            ],
	            "saved": [
	                {
	                    "name": "property2",
	                    "id": "3"
	                }
	            ]
	        }
	    beforeEach(angular.mock.inject(function($rootScope, $controller, $q, $http){
	        rootScope = $rootScope;
	        ctrl = $controller;
	        scope = $rootScope.$new();
	        propertyListService = jasmine.createSpyObj('propertyListService', ['addItem', 'deleteItem']);


	        diferredAdd = $q.defer();
	        diferredDelete = $q.defer();

	        propertyListService.addItem.andReturn(diferredAdd.promise);
	        propertyListService.deleteItem.andReturn(diferredDelete.promise);

	        propertyController = ctrl('propertyController', {
	            propertyListService: propertyListService,
	            $state: state,
	            $rootScope: rootScope
	        });
	    }));

	    describe('#porpertyController', function(){
	        it('should check after add Item the getItems is called', function () {
	        	diferredAdd.resolve();
	        	rootScope.$apply();
	            propertyListService.addItem(data.results[0]).then(function(){
	                expect(propertyController.getItems).toHaveBeenCalled();
	            });
	        });

	        it('should check after delete Item the getItems is called', function(){
	            diferredDelete.resolve(data);
	            rootScope.$apply(); 
	            propertyListService.deleteItem(data.results[0]).then(function(){
	                expect(propertyController.getItems).toHaveBeenCalled();
	            });
	        })
	    });
	});

});