export function ModalComponent() {
    let component = {
        templateUrl: 'app/components/modal/modal.html',
        transclude: true,
        controller: class {
            constructor () {
                this.name = 'bill';
            }

            $onInit () {
                console.log('onInit');
            }
        },
        controllerAs: 'vm'
    };

    class ModalController {
        constructor () {
            this.name = 'bill';
        }

        $onInit () {
            console.log('onInit');
        }
    }

    return component;
}