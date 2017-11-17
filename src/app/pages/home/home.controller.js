export class HomeController {
    constructor ($scope, $timeout, observeOnScope) {
        $scope.name = 'bill';

        $timeout(() => {
            $scope.name= 'king';
        }, 3000);

        observeOnScope($scope, 'name').subscribe((change) =>{
            console.log(change);
        });
    }
}