// vendor
import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import rx from 'rx-angular';

import { config} from "./index.config";
import { routerConfig } from './index.route';

import ModalComponent from "./components/modal/modal.component";
import MovieComponent from "./components/movie/movie.component"
import { NavBarComponent } from "./components/navbar/navbar.component";
import HomeComponent from "./pages/home/home.component";

import MyDirective from "./directives/my-repeat.directive";

import modalService from './services/modal.service';

import apiService from './services/api.service';

angular.module('ng1Dashboard', ['ui.router', 'rx'])
    .config(config)
    .config(routerConfig)
    .component('modal', ModalComponent)
    .component('movie', MovieComponent)
    .component('navbar', NavBarComponent())
    .component('home', HomeComponent)
    .directive('myDirective', () => new MyDirective())
    .service('modalService', modalService)
    .service('apiService', apiService);