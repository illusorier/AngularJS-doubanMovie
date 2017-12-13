export function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            component: 'home'
        });

    $urlRouterProvider.otherwise('/');
}