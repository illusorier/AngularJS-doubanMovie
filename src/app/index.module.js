// vendor
import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import rx from 'rx-angular';

import { config} from "./index.config";
import { routerConfig } from './index.route';

import ModalComponent from "./components/modal/modal.component";
import { NavBarComponent } from "./components/navbar/navbar.component";

import {HomeController} from "./pages/home/home.controller";

import modalService from './services/modal.service';

angular.module('ng1Dashboard', ['ui.router', 'rx'])
    .config(config)
    .config(routerConfig)
    .component('modal', ModalComponent)
    .component('navbar', NavBarComponent())
    .controller('HomeController', HomeController)
    .service('modalService', modalService);