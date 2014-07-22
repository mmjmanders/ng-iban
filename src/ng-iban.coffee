'use strict'

angular
  .module 'mm.iban', ['ng']
  .directive 'ngIban', ->
    restrict: 'A'
    require: 'ngModel'
    link: (scope, elem, attrs, ctrl) ->
      A = 'A'.charCodeAt 0
      Z = 'Z'.charCodeAt 0
      scope.$watch attrs.ngModel, ->
        ctrl.$setValidity 'iban', (not ctrl.$error.hasOwnProperty('required') or not !!ctrl.$error.required) and (not ctrl.$modelValue or ctrl.$modelValue is '')

        if ctrl.$modelValue and ctrl.$modelValue isnt ''
          iban = ctrl.$modelValue.toUpperCase().replace /\s/g, ''
          iban = iban.substr(4) + iban.substr 0, 4

          remainder = iban.split('').map (n) ->
            code = n.charCodeAt 0
            if code >= A and code <= Z then code - A + 10 else n
          .join ''

          while remainder.length > 2
            block = remainder.slice 0, 9
            remainder = parseInt(block, 10) %% 97 + remainder.slice block.length

          ctrl.$setValidity 'iban', parseInt(remainder, 10) %% 97 is 1
