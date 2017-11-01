export function routerConfig($stateProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'app/pages/home.html'
        });
}