import 'angular';
import 'angular-ui-router';

import {loaderModule} from 'loader-module';


var app = angular.module('app', ['ui.router', loaderModule.name]);

export {app}