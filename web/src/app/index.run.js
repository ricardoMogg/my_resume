/* global Parse:false */
(function () {
  'use strict';

  angular
    .module('resume')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    /*Parse.initialize('BPvZbp31DEcKoXskSYnyiDYdQds12Ekkp6F7NwNh','Dhucc1xuozPJTxz4jajiX0PiMPRzPFBGP75TwYZM');*/
    $log.debug('App ready!');
  }

  /** @ngInject */


})();
