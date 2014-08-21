'use strict';
var __modulo = function(a, b) { return (a % b + +b) % b; };

angular.module('mm.iban', ['ng']).directive('ngIban', function() {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, elem, attrs, ctrl) {
      var isValidIban;
      isValidIban = function(value) {
        var A, Z, block, iban, remainder;
        A = 'A'.charCodeAt(0);
        Z = 'Z'.charCodeAt(0);
        iban = value.toUpperCase().replace(/\s/g, '');
        iban = iban.substr(4) + iban.substr(0, 4);
        remainder = iban.split('').map(function(n) {
          var code;
          code = n.charCodeAt(0);
          if (code >= A && code <= Z) {
            return code - A + 10;
          } else {
            return n;
          }
        }).join('');
        while (remainder.length > 2) {
          block = remainder.slice(0, 9);
          remainder = __modulo(parseInt(block, 10), 97) + remainder.slice(block.length);
        }
        return __modulo(parseInt(remainder, 10), 97) === 1;
      };
      ctrl.$parsers.unshift(function(value) {
        var valid;
        valid = value != null ? isValidIban(value) : true;
        ctrl.$setValidity('iban', valid);
        if (valid) {
          return value;
        } else {
          return void 0;
        }
      });
      return ctrl.$formatters.unshift(function(value) {
        var valid;
        valid = value != null ? isValidIban(value) : true;
        ctrl.$setValidity('iban', valid);
        return value;
      });
    }
  };
});
