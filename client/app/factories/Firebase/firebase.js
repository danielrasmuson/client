'use strict';

angular.module('civicMakersClientApp')
  .factory('firebase', function () {
    var ref = new Firebase('civicmakers.firebaseIO.com');

    function getRef(){
      return ref;
    } 

    return {
      getRef: getRef
    }
  })