export default class modalService {
    constructor($document, $compile) {
        // 'ngInject';
        this.body = $document.find('body');
        this.$compile = $compile;
    }

    addModal($scope) {
        let html = `<modal></modal>`;

        this.body.append(this.$compile(html)($scope));
    }
}