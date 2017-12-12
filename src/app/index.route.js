export function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            controller: 'HomeController',
            templateUrl: 'app/pages/home/home.html'
        });

    $urlRouterProvider.otherwise('/');
}