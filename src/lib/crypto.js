'use strict';
var Crypto = require('crypto');

angular.module('olitvin.crypto', [])
    .factory('zCrypto', function () {        
        return angular.extend(Crypto, {
            newKey: function (keyHex)
            {
                var key = Crypto.createECDH('prime256v1');
                key.generateKeys('hex');
                if (keyHex) {
                    key.setPrivateKey(Buffer(keyHex, 'hex'));
                }
                return key;
            },
            getPublic: function (privKey)
            {
                var key = Crypto.createECDH('prime256v1');
                key.setPrivateKey(Buffer(keyHex, 'hex'));
                return key.getPublicKey('base64', 'compressed');
            }
        });
    })