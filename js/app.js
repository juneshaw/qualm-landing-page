var app = angular.module('qualm-landing-pageApp', ['ngRoute'])
        app.config(function($routeProvider) {
          // $locationProvider.html5Mode(true);
            $routeProvider
                .when('/', {
                    templateUrl: '../partials/index.html',
                    controller: 'MainController'
                })
                .when('/tech', {
                    templateUrl: '../partials/tech.html',
                    controller: 'TechController'
                })
                .otherwise({redirectTo : '/'})
        })
