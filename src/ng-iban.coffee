'use strict'

@IBAN = require 'iban'

self = @

angular
  .module 'mm.iban', ['ng']
  .directive 'ngIban', ->
    restrict: 'A'
    require: 'ngModel'
    link: (scope, elem, attrs, ctrl) ->
      parseIban = (value) ->
        if value? then value.toUpperCase().replace /\s/g, '' else undefined

      isValidIban = (value) ->
        return true if not(attrs.required or value)

        iban = parseIban(value)
        self.IBAN.isValid iban

      ctrl.$parsers.unshift (viewValue) ->
        if viewValue?
          valid = isValidIban viewValue
          ctrl.$setValidity 'iban', valid
          if valid
            parsed = parseIban viewValue
            if parsed isnt viewValue
              ctrl.$setViewValue parsed
              ctrl.$render()
            parsed
          else undefined

      ctrl.$formatters.unshift (modelValue) ->
        if modelValue?
          valid = isValidIban modelValue
          ctrl.$setValidity 'iban', valid
          if valid
            parsed = parseIban modelValue
            if parsed isnt modelValue
              scope[attrs.ngModel] = parsed
            parsed
          else modelValue
