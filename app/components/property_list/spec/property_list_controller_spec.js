define(['propertyModule'], function(){
    describe('#porpertyListController', function(){
        beforeEach(module('propertyModule'));
        var ctrl, scope, diferred, url, rootScope, state, data, propertyListController;
        data = {
                "results": [
                    {
                        "price": "$526,500",
                        "id": "4"
                    }
                ],
                "saved": [
                    {
                        "price": "$826,500",
                        "id": "3"
                    }
                ]
            }
        beforeEach(angular.mock.inject(function($rootScope, $controller, $q, $http){
            rootScope = $rootScope;
            ctrl = $controller;
            scope = $rootScope.$new();
            propertyListService = jasmine.createSpyObj('propertyListService', ['getItems']);
            propertyListService.state = {isLoading: true, 
                                        error: ''};

            diferred = $q.defer();

            propertyListService.getItems.andReturn(diferred.promise);

            propertyListController = ctrl('propertyListController', {
                propertyListService: propertyListService,
                $state: state,
                $rootScope: rootScope
            });
        }));

        describe('#init', function(){
           
        });
    });

});