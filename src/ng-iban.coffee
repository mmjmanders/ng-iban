'use strict'

`import * as IBAN from 'iban'`

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
        IBAN.isValid iban

      ctrl.$validators.ngIban = (modelValue) ->
        isValidIban modelValue

      return