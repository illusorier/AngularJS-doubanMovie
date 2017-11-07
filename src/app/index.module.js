import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import { config} from "./index.config";
import { routerConfig } from './index.route';

import { ModalComponent } from "./components/modal/modal.component";

angular.module('ng1Dashboard', ['ui.router'])
    .config(config)
    .config(routerConfig)
    .component('modal', ModalComponent);