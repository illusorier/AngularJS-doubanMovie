export function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            controller: 'HomeController',
            templateUrl: 'app/pages/home/home.html'
        });

    $urlRouterProvider.otherwise('/home');
}