let HomeComponent = {
    templateUrl: 'app/pages/home/home.html',
    controller: HomeController,
    controllerAs: 'vm'
};

class HomeController {
    constructor ($scope, $timeout, observeOnScope, modalService) {
        $scope.name = 'bill';

        $timeout(() => {
            $scope.name= 'king';
            modalService.addModal($scope);
        }, 3000);

        observeOnScope($scope, 'name').subscribe((change) =>{
            console.log(change);
        });
    }
}

export default HomeComponent;