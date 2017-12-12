export class HomeController {
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