/* global window: false */
(function () {
  'use strict';

  window.commonDependencies = ['ngAnimate', 'angular.filter'];

  angular
    .module('resume', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ui.router']);

})();
