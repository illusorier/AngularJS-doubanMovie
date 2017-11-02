import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import { routerConfig } from './index.route';

import { ModalComponent } from "./components/modal/modal.component";

angular.module('ng1Dashboard', ['ui.router'])
    .config(routerConfig)
    .component('modal', ModalComponent);