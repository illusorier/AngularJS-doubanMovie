class HomeController {
    constructor ($scope, $timeout, observeOnScope, modalService, apiService) {
        $scope.name = 'bill';

        $timeout(() => {
            $scope.name= 'king';
            modalService.addModal($scope);
        }, 3000);

        observeOnScope($scope, 'name').subscribe((change) =>{
            console.log(change);
        });

        apiService.getMovieInTheaters();
    }
}

let HomeComponent = {
    templateUrl: 'app/pages/home/home.html',
    controller: HomeController,
    controllerAs: 'vm'
};

export default HomeComponent;