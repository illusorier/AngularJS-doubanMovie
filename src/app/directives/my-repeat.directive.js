export default class MyDirective {
    constructor() {
        return {
            template: '<p>hello</p>',
            controller($element) {
                console.log('controller');
                console.log($element);
            },
            link($scope, $element) {
                console.log('link');
                console.log($element);
                $element[0].innerHTML = '<p>hello world</p>';
            }
        }
    }
}