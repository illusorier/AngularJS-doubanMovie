export function NavBarComponent() {
    let component = {
        templateUrl: 'app/components/navbar/navbar.html',
        controller: NavBarController,
        controllerAs: 'vm'
    };

    return component;

    class NavBarController {
        constructor () {

        }
    }
}