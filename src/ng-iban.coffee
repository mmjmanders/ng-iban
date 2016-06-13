'use strict'

IBAN = require 'iban'

angular
  .module 'mm.iban', ['ng']
  .directive 'ngIban', ->
    restrict: 'A'
    require: 'ngModel'
    scope:
      ngModel: '='
    link: (scope, elem, attrs, ctrl) ->
      parseIban = (value) ->
        if value? then value.toUpperCase().replace /\s/g, '' else undefined

      isValidIban = (value) ->
        return true if not(attrs.required or value)

        iban = parseIban(value)
        IBAN.isValid iban

      ctrl.$validators.ngIban = (modelValue) ->
        isValidIban modelValue

      ctrl.$parsers.unshift (viewValue) ->
        if viewValue?
          valid = isValidIban viewValue
          if valid
            parsed = parseIban viewValue
            if parsed isnt viewValue
              ctrl.$setViewValue parsed
              ctrl.$render()
            parsed
          else
            viewValue

      ctrl.$formatters.unshift (modelValue) ->
        if modelValue?
          valid = isValidIban modelValue
          if valid
            parsed = parseIban modelValue
            if parsed isnt modelValue
              scope.ngModel = parsed
            parsed
          else modelValue

      return

  .filter 'iban', ->
    (string, separator) ->
      parseIban = (value) ->
        if value? then value.toUpperCase().replace /\s/g, '' else undefined

      isValidIban = (value) ->
        iban = parseIban(value)
        IBAN.isValid iban

      valid = isValidIban string
      if valid
        IBAN.printFormat string, separator
      else
        string
