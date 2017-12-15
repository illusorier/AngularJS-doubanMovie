class ModalCtrl {
    constructor () {
        this.name = 'bill';
    }

    $onInit () {
        console.log('onInit');
    }
}

let ModalComponent = {
    templateUrl: 'app/components/modal/modal.html',
    transclude: {
        title: 'modalTitle',
        body: 'modalBody'
    },
    controller: ModalCtrl,
    controllerAs: 'vm'
};

export default ModalComponent;