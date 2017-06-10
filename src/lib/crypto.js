'use strict';
var Crypto = require('crypto');

angular.module('olitvin.crypto', [])
    .factory('crypto', function () {
        return Crypto;
    })