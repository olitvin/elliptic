'use strict';
var Crypto = require('crypto');

angular.module('olitvin.crypto', [])
    .factory('zCrypto', function () {
        return Crypto;
    })