'use strict';
var Elliptic = require('elliptic');

angular.module('olitvin.elliptic',[])
.factory('elliptic', function() {
  return Elliptic;
})