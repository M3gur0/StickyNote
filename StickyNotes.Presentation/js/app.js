var app = angular.module("stickyNotes", ['ngRoute']);

(function () {

    app.config(['$routeProvider', function ($routeProvider) {

        $(app).trigger('configureRouting', $routeProvider);

        $routeProvider
            .when('/home', {
                templateUrl: '/home/dashboard',
                controller: 'homeController',
                title : 'dashboard'
            })
            .otherwise('/home');

    }]);

    app.run(['$rootScope', '$route', function ($rootScope, $route) {

        $rootScope.$on('$routeChangeSuccess', function (newVal, oldVal) {
            if (oldVal !== newVal) {
                document.title = 'Sticky notes - ' + $route.current.title;
            }
        });

    }]);


})();