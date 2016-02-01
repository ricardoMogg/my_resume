/* global Parse:false */
(function () {
  'use strict';

  angular
    .module('resume')
    .service('$parseService', ParseService);

  /** @ngInject */
  function ParseService() {
    return {
    save:function(objName,params,success,error) {
      var obj = new Parse.Object(objName);
      obj.save(params,{
        success:success,
        error:error
      });
    },
    find:function(obj,success,error) {
      var parseObj = Parse.Object.extend(obj);
      var parseQuery = new Parse.Query(parseObj);
      parseQuery.ascending('createdAt');
      parseQuery.find({
          success: success,
          error: error
      });
    },
    get:function(obj,id,success,error) {
      var parseObj = Parse.Object.extend(obj);
      var parseQuery = new Parse.Query(parseObj);
      parseQuery.get(id,{
          success: success,
          error: error
      });
    },
    query:function(obj,filterList,success,error) {
      var parseObj = Parse.Object.extend(obj);
      var parseQuery = new Parse.Query(parseObj);
      for (var i in filterList){
        parseQuery[filterList[i].operator](filterList[i].field,filterList[i].value);
      }
      parseQuery.find({
          success: success,
          error: error
      });
    },
    cloudCode:function(fnName, requestParams, success, error) {
      Parse.Cloud.run(fnName,requestParams, {
            success: success,
            error:error
      });
    }
  };
}


})();