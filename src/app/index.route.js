export function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'app/pages/home.html'
        });

    $urlRouterProvider.otherwise('/home');
}