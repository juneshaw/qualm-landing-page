var app = angular.module('qualm-landing-pageApp', ['ngRoute'])
        app.config(function($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: '../partials/index.html',
                    controller: 'MainController'
                })
                .otherwise({redirectTo : '/'})
        })
