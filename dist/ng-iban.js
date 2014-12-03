(function() {
  'use strict';
  var __modulo = function(a, b) { return (a % b + +b) % b; };

  angular.module('mm.iban', ['ng']).constant('ngIbanCountries', {
    AL: {
      name: 'Albania',
      regex: /^AL[0-9]{2}[0-9]{8}[A-Z0-9]{16}$/
    },
    AD: {
      name: 'Andorra',
      regex: /^AD[0-9]{2}[0-9]{4}[0-9]{4}[A-Z0-9]{12}$/
    },
    AT: {
      name: 'Austria',
      regex: /^AT[0-9]{2}[0-9]{5}[0-9]{11}$/
    },
    AZ: {
      name: 'Azerbaijan, Republic of',
      regex: /^AZ[0-9]{2}[A-Z]{4}[A-Z0-9]{20}$/
    },
    BH: {
      name: 'Bahrain',
      regex: /^BH[0-9]{2}[A-Z]{4}[A-Z0-9]{14}$/
    },
    BE: {
      name: 'Belgium',
      regex: /^BE[0-9]{2}[0-9]{3}[0-9]{7}[0-9]{2}$/
    },
    BA: {
      name: 'Bosnia and Herzegovina',
      regex: /^BA[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{8}[0-9]{2}$/
    },
    BR: {
      name: 'Brazil',
      regex: /^BR[0-9]{2}[0-9]{8}[0-9]{5}[0-9]{10}[A-Z]{1}[A-Z0-9]{1}$/
    },
    BG: {
      name: 'Bulgaria',
      regex: /^BG[0-9]{2}[A-Z]{4}[0-9]{4}[0-9]{2}[A-Z0-9]{8}$/
    },
    CR: {
      name: 'Costa Rica',
      regex: /^CR[0-9]{2}[0-9]{3}[0-9]{14}$/
    },
    HR: {
      name: 'Croatia',
      regex: /^HR[0-9]{2}[0-9]{7}[0-9]{10}$/
    },
    CY: {
      name: 'Cyprus',
      regex: /^CY[0-9]{2}[0-9]{3}[0-9]{5}[A-Z0-9]{16}$/
    },
    CZ: {
      name: 'Czech Republic',
      regex: /^CZ[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{10}$/
    },
    DK: {
      name: 'Denmark',
      regex: /^DK[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}$/
    },
    DO: {
      name: 'Dominican Republic',
      regex: /^DO[0-9]{2}[A-Z0-9]{4}[0-9]{20}$/
    },
    EE: {
      name: 'Estonia',
      regex: /^EE[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{11}[0-9]{1}$/
    },
    FO: {
      name: 'Faroe Islands',
      regex: /^FO[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}$/
    },
    FI: {
      name: 'Finland',
      regex: /^FI[0-9]{2}[0-9]{6}[0-9]{7}[0-9]{1}$/
    },
    FR: {
      name: 'France',
      regex: /^FR[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}$/
    },
    GE: {
      name: 'Georgia',
      regex: /^GE[0-9]{2}[A-Z]{2}[0-9]{16}$/
    },
    DE: {
      name: 'Germany',
      regex: /^DE[0-9]{2}[0-9]{8}[0-9]{10}$/
    },
    GI: {
      name: 'Gibraltar',
      regex: /^GI[0-9]{2}[A-Z]{4}[A-Z0-9]{15}$/
    },
    GR: {
      name: 'Greece',
      regex: /^GR[0-9]{2}[0-9]{3}[0-9]{4}[A-Z0-9]{16}$/
    },
    GL: {
      name: 'Greenland',
      regex: /^GL[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}$/
    },
    GT: {
      name: 'Guatemala',
      regex: /^GT[0-9]{2}[A-Z0-9]{4}[A-Z0-9]{20}$/
    },
    HU: {
      name: 'Hungary',
      regex: /^HU[0-9]{2}[0-9]{3}[0-9]{4}[0-9]{1}[0-9]{15}[0-9]{1}$/
    },
    IS: {
      name: 'Iceland',
      regex: /^IS[0-9]{2}[0-9]{4}[0-9]{2}[0-9]{6}[0-9]{10}$/
    },
    IE: {
      name: 'Ireland',
      regex: /^IE[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}$/
    },
    IL: {
      name: 'Israel',
      regex: /^IL[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{13}$/
    },
    IT: {
      name: 'Italy',
      regex: /^IT[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}$/
    },
    KZ: {
      name: 'Kazakhstan',
      regex: /^KZ[0-9]{2}[0-9]{3}[A-Z0-9]{13}$/
    },
    KW: {
      name: 'Kuwait',
      regex: /^KW[0-9]{2}[A-Z]{4}[A-Z0-9]{22}$/
    },
    LV: {
      name: 'Latvia',
      regex: /^LV[0-9]{2}[A-Z]{4}[A-Z0-9]{13}$/
    },
    LB: {
      name: 'Lebanon',
      regex: /^LB[0-9]{2}[0-9]{4}[A-Z0-9]{20}$/
    },
    LI: {
      name: 'Liechtenstein (Principality of)',
      regex: /^LI[0-9]{2}[0-9]{5}[A-Z0-9]{12}$/
    },
    LT: {
      name: 'Lithuania',
      regex: /^LT[0-9]{2}[0-9]{5}[0-9]{11}$/
    },
    LU: {
      name: 'Luxembourg',
      regex: /^LU[0-9]{2}[0-9]{3}[A-Z0-9]{13}$/
    },
    MK: {
      name: 'Macedonia',
      regex: /^MK[0-9]{2}[0-9]{3}[A-Z0-9]{10}[0-9]{2}$/
    },
    MT: {
      name: 'Malta',
      regex: /^MT[0-9]{2}[A-Z]{4}[0-9]{5}[A-Z0-9]{18}$/
    },
    MR: {
      name: 'Mauritania',
      regex: /^MR[0-9]{2}[0-9]{5}[0-9]{5}[0-9]{11}[0-9]{2}$/
    },
    MU: {
      name: 'Mauritius',
      regex: /^MU[0-9]{2}[A-Z]{4}[0-9]{2}[0-9]{2}[0-9]{12}[0-9]{3}[A-Z]{3}$/
    },
    MD: {
      name: 'Moldova, Republic of',
      regex: /^MD[0-9]{2}[A-Z0-9]{20}$/
    },
    MC: {
      name: 'Monaco',
      regex: /^MC[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}$/
    },
    ME: {
      name: 'Montenegro',
      regex: /^ME[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}$/
    },
    NL: {
      name: 'Netherlands',
      regex: /^NL[0-9]{2}[A-Z]{4}[0-9]{10}$/
    },
    NO: {
      name: 'Norway',
      regex: /^NO[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{1}$/
    },
    PK: {
      name: 'Pakistan',
      regex: /^PK[0-9]{2}[A-Z]{4}[A-Z0-9]{16}$/
    },
    PL: {
      name: 'Poland',
      regex: /^PL[0-9]{2}[0-9]{8}[0-9]{16}$/
    },
    PS: {
      name: 'Palestinian Territory, Occupied',
      regex: /^PS[0-9]{2}[A-Z]{4}[A-Z0-9]{21}$/
    },
    PT: {
      name: 'Portugal',
      regex: /^PT[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{11}[0-9]{2}$/
    },
    QA: {
      name: 'Qatar',
      regex: /^QA[0-9]{2}[A-Z]{4}[A-Z0-9]{21}$/
    },
    RO: {
      name: 'Romania',
      regex: /^RO[0-9]{2}[A-Z]{4}[A-Z0-9]{16}$/
    },
    SM: {
      name: 'San Marino',
      regex: /^SM[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}$/
    },
    SA: {
      name: 'Saudi Arabia',
      regex: /^SA[0-9]{2}[0-9]{2}[A-Z0-9]{18}$/
    },
    RS: {
      name: 'Serbia',
      regex: /^RS[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}$/
    },
    SK: {
      name: 'Slovak Republic',
      regex: /^SK[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{10}$/
    },
    SI: {
      name: 'Slovenia',
      regex: /^SI[0-9]{2}[0-9]{5}[0-9]{8}[0-9]{2}$/
    },
    ES: {
      name: 'Spain',
      regex: /^ES[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{1}[0-9]{1}[0-9]{10}$/
    },
    SE: {
      name: 'Sweden',
      regex: /^SE[0-9]{2}[0-9]{3}[0-9]{16}[0-9]{1}$/
    },
    CH: {
      name: 'Switzerland',
      regex: /^CH[0-9]{2}[0-9]{5}[A-Z0-9]{12}$/
    },
    TL: {
      name: 'Timor-Leste',
      regex: /^TL[0-9]{2}[0-9]{3}[0-9]{14}[0-9]{2}$/
    },
    TN: {
      name: 'Tunisia',
      regex: /^TN[0-9]{2}[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}$/
    },
    TR: {
      name: 'Turkey',
      regex: /^TR[0-9]{2}[0-9]{5}[A-Z0-9]{1}[A-Z0-9]{16}$/
    },
    AE: {
      name: 'United Arab Emirates',
      regex: /^AE[0-9]{2}[0-9]{3}[0-9]{16}$/
    },
    GB: {
      name: 'United Kingdom',
      regex: /^GB[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}$/
    },
    VG: {
      name: 'Virgin Islands, British',
      regex: /^VG[0-9]{2}[A-Z]{4}[0-9]{16}$/
    }
  }).directive('ngIban', ["ngIbanCountries", function(ngIbanCountries) {
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
          var A, Z, block, iban, remainder;
          if (!(attrs.required || value)) {
            return true;
          }
          A = 'A'.charCodeAt(0);
          Z = 'Z'.charCodeAt(0);
          iban = parseIban(value);
          if (attrs.ngIban !== '' && (!!!(attrs.ngIban in ngIbanCountries) || !ngIbanCountries[attrs.ngIban].regex.test(iban))) {
            return false;
          }
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
  }]);

}).call(this);
