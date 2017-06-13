'use strict';
var Crypto = require('crypto');

angular.module('olitvin.crypto', [])
    .factory('zCrypto', function () {        
        return angular.extend(Crypto, {
            newKey: function (keyHex)
            {
                var key = Crypto.createECDH('prime256v1');
                if (keyHex) {
                    key.setPrivateKey(Buffer(keyHex, 'hex'));
                } else {
                    key.generateKeys('hex');
                }
                return key;
            }
        });
    })