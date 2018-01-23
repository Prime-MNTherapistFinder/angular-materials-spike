var myApp = angular.module('myApp', ['ngMaterial', 'ngRoute']);

myApp.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/views/home.html',
        controller: 'MaterialController as ctrl'
    }).when('/therapistInfo', {
        templateUrl: '/views/modals/therapistInfo.html',
        controller: 'MaterialController as vm'
    }).otherwise({
        template: '<h1>404</h1>'
    });
});
