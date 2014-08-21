'use strict'

angular
  .module 'mm.iban', ['ng']
  .directive 'ngIban', ->
    restrict: 'A'
    require: 'ngModel'
    link: (scope, elem, attrs, ctrl) ->
      isValidIban = (value) ->
        A = 'A'.charCodeAt 0
        Z = 'Z'.charCodeAt 0

        iban = value.toUpperCase().replace /\s/g, ''
        iban = iban.substr(4) + iban.substr 0, 4

        remainder = iban.split('').map (n) ->
          code = n.charCodeAt 0
          if code >= A and code <= Z then code - A + 10 else n
        .join ''

        while remainder.length > 2
          block = remainder.slice 0, 9
          remainder = parseInt(block, 10) %% 97 + remainder.slice block.length

        parseInt(remainder, 10) %% 97 is 1

      ctrl.$parsers.unshift (value) ->
        valid = if value? then isValidIban value else true
        ctrl.$setValidity 'iban', valid
        if valid then value else undefined

      ctrl.$formatters.unshift (value) ->
        valid = if value? then isValidIban value else true
        ctrl.$setValidity 'iban', valid
        value
