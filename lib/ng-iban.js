(function() {
  'use strict';
  var IBAN;

  IBAN = require('iban');

  angular.module('mm.iban', ['ng']).directive('ngIban', function() {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function(scope, elem, attrs, ctrl) {
        var isValidIban, parseIban;
        parseIban = function(value) {
          if (value != null) {
            return value.toUpperCase().replace(/\s/g, '');
          } else {
            return void 0;
          }
        };
        isValidIban = function(value) {
          var iban;
          if (!(attrs.required || value)) {
            return true;
          }
          iban = parseIban(value);
          return IBAN.isValid(iban);
        };
        ctrl.$parsers.unshift(function(viewValue) {
          var parsed, valid;
          if (viewValue != null) {
            valid = isValidIban(viewValue);
            ctrl.$setValidity('iban', valid);
            if (valid) {
              parsed = parseIban(viewValue);
              if (parsed !== viewValue) {
                ctrl.$setViewValue(parsed);
                ctrl.$render();
              }
              return parsed;
            } else {
              return void 0;
            }
          }
        });
        return ctrl.$formatters.unshift(function(modelValue) {
          var parsed, valid;
          if (modelValue != null) {
            valid = isValidIban(modelValue);
            ctrl.$setValidity('iban', valid);
            if (valid) {
              parsed = parseIban(modelValue);
              if (parsed !== modelValue) {
                scope[attrs.ngModel] = parsed;
              }
              return parsed;
            } else {
              return modelValue;
            }
          }
        });
      }
    };
  });

}).call(this);
