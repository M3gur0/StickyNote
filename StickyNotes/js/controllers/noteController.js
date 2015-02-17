(function () {

    $(app).on('configureRouting', function (e, $routeProvider) {
        $routeProvider.when('/note', {
            templateUrl: '/note/list',
            controller: 'noteListController',
            title: 'Sticky notes - note list'
        });
    });

    app.controller('noteController', ['$scope', function ($scope) {

        
    }]);

    app.controller('noteListController', ['$scope', 'noteService', function ($scope, noteService) {
        debugger;
        $scope.notes = noteService.get();

    }]);

})();