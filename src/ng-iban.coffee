'use strict'

angular
  .module 'mm.iban', ['ng']
  .constant 'countries',
    AL: /^AL[0-9]{2}[0-9]{8}[A-Z0-9]{16}$/
    AD: /^AD[0-9]{2}[0-9]{4}[0-9]{4}[A-Z0-9]{12}$/
    AT: /^AT[0-9]{2}[0-9]{5}[0-9]{11}$/
    AZ: /^AZ[0-9]{2}[A-Z]{4}[A-Z0-9]{20}$/
    BH: /^BH[0-9]{2}[A-Z]{4}[A-Z0-9]{14}$/
    BE: /^BE[0-9]{2}[0-9]{3}[0-9]{7}[0-9]{2}$/
    BA: /^BA[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{8}[0-9]{2}$/
    BR: /^BR[0-9]{2}[0-9]{8}[0-9]{5}[0-9]{10}[A-Z]{1}[A-Z0-9]{1}$/
    BG: /^BG[0-9]{2}[A-Z]{4}[0-9]{4}[0-9]{2}[A-Z0-9]{8}$/
    CR: /^CR[0-9]{2}[0-9]{3}[0-9]{14}$/
    HR: /^HR[0-9]{2}[0-9]{7}[0-9]{10}$/
    CY: /^CY[0-9]{2}[0-9]{3}[0-9]{5}[A-Z0-9]{16}$/
    CZ: /^CZ[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{10}$/
    DK: /^DK[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}$/
    DO: /^DO[0-9]{2}[A-Z0-9]{4}[0-9]{20}$/
    EE: /^EE[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{11}[0-9]{1}$/
    FO: /^FO[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}$/
    FI: /^FI[0-9]{2}[0-9]{6}[0-9]{7}[0-9]{1}$/
    FR: /^FR[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}$/
    GE: /^GE[0-9]{2}[A-Z]{2}[0-9]{16}$/
    DE: /^DE[0-9]{2}[0-9]{8}[0-9]{10}$/
    GI: /^GI[0-9]{2}[A-Z]{4}[A-Z0-9]{15}$/
    GR: /^GR[0-9]{2}[0-9]{3}[0-9]{4}[A-Z0-9]{16}$/
    GL: /^GL[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}$/
    GT: /^GT[0-9]{2}[A-Z0-9]{4}[A-Z0-9]{20}$/
    HU: /^HU[0-9]{2}[0-9]{3}[0-9]{4}[0-9]{1}[0-9]{15}[0-9]{1}$/
    IS: /^IS[0-9]{2}[0-9]{4}[0-9]{2}[0-9]{6}[0-9]{10}$/
    IE: /^IE[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}$/
    IL: /^IL[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{13}$/
    IT: /^IT[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}$/
    KZ: /^KZ[0-9]{2}[0-9]{3}[A-Z0-9]{13}$/
    KW: /^KW[0-9]{2}[A-Z]{4}[A-Z0-9]{22}$/
    LV: /^LV[0-9]{2}[A-Z]{4}[A-Z0-9]{13}$/
    LB: /^LB[0-9]{2}[0-9]{4}[A-Z0-9]{20}$/
    LI: /^LI[0-9]{2}[0-9]{5}[A-Z0-9]{12}$/
    LT: /^LT[0-9]{2}[0-9]{5}[0-9]{11}$/
    LU: /^LU[0-9]{2}[0-9]{3}[A-Z0-9]{13}$/
    MK: /^MK[0-9]{2}[0-9]{3}[A-Z0-9]{10}[0-9]{2}$/
    MT: /^MT[0-9]{2}[A-Z]{4}[0-9]{5}[A-Z0-9]{18}$/
    MR: /^MR[0-9]{2}[0-9]{5}[0-9]{5}[0-9]{11}[0-9]{2}$/
    MU: /^MU[0-9]{2}[A-Z]{4}[0-9]{2}[0-9]{2}[0-9]{12}[0-9]{3}[A-Z]{3}$/
    MD: /^MD[0-9]{2}[A-Z0-9]{20}$/
    MC: /^MC[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}$/
    ME: /^ME[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}$/
    NL: /^NL[0-9]{2}[A-Z]{4}[0-9]{10}$/
    NO: /^NO[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{1}$/
    PK: /^PK[0-9]{2}[A-Z]{4}[A-Z0-9]{16}$/
    PL: /^PL[0-9]{2}[0-9]{8}[0-9]{16}$/
    PS: /^PS[0-9]{2}[A-Z]{4}[A-Z0-9]{21}$/
    PT: /^PT[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{11}[0-9]{2}$/
    QA: /^QA[0-9]{2}[A-Z]{4}[A-Z0-9]{21}$/
    RO: /^RO[0-9]{2}[A-Z]{4}[A-Z0-9]{16}$/
    SM: /^SM[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}$/
    SA: /^SA[0-9]{2}[0-9]{2}[A-Z0-9]{18}$/
    RS: /^RS[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}$/
    SK: /^SK[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{10}$/
    SI: /^SI[0-9]{2}[0-9]{5}[0-9]{8}[0-9]{2}$/
    ES: /^ES[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{1}[0-9]{1}[0-9]{10}$/
    SE: /^SE[0-9]{2}[0-9]{3}[0-9]{16}[0-9]{1}$/
    CH: /^CH[0-9]{2}[0-9]{5}[A-Z0-9]{12}$/
    TN: /^TN[0-9]{2}[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}$/
    TR: /^TR[0-9]{2}[0-9]{5}[A-Z0-9]{1}[A-Z0-9]{16}$/
    AE: /^AE[0-9]{2}[0-9]{3}[0-9]{16}$/
    GB: /^GB[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}$/
    VG: /^VG[0-9]{2}[A-Z]{4}[0-9]{16}$/
  .directive 'ngIban', (countries) ->
    restrict: 'A'
    require: 'ngModel'
    link: (scope, elem, attrs, ctrl) ->
      isValidIban = (value) ->
        A = 'A'.charCodeAt 0
        Z = 'Z'.charCodeAt 0

        iban = value.toUpperCase().replace /\s/g, ''
        return false if attrs.ngIban isnt '' and (not !!(attrs.ngIban of countries) or not countries[attrs.ngIban].test iban)

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
        if valid
          parsed = if value? then value.toUpperCase().replace /\s/g, '' else undefined
          if parsed isnt value
            ctrl.$setViewValue parsed
            ctrl.$render()
          parsed
        else undefined

      ctrl.$formatters.unshift (value) ->
        valid = if value? then isValidIban value else true
        ctrl.$setValidity 'iban', valid
        value
