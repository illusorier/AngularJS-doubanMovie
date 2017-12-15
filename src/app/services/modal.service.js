export default class modalService {
    constructor($document, $compile) {
        // 'ngInject';
        this.body = $document.find('body');
        this.$compile = $compile;
    }

    addModal($scope) {
        let html = `<modal>
                              <modal-title>Are you sure ?</modal-title>
                              <modal-body>You can only do this  times</modal-body>
                           </modal>`;

        this.body.append(this.$compile(html)($scope));
    }
}