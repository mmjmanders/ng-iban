[![No Maintenance Intended](http://unmaintained.tech/badge.svg)](http://unmaintained.tech/)

# DEPRECATED
This package isn't actively maintained since [AngularJS](https://angularjs.org) isn't being maintained anymore

# ng-iban - validate input fields as IBAN
The goal is to provide an easy way to validate an input field as an IBAN number with [AngularJS](https://angularjs.org/).
From version `0.4.0` the module uses [iban.js](https://github.com/arhs/iban.js) for validation.

For the Angular 2+ version see [ngx-iban](https://github.com/mmjmanders/ngx-iban).

## Installation

### NPM

`npm install ng-iban`

## Usage

Add `mm.iban` as a dependency of your AngularJS module.

### directive
```html
<input type="text" ng-model="iban" ng-iban/>
```

To use this directive the `ngModel` directive must also be used because this directive depends on it.

### filter
```
IBAN: {{ string | iban:separator }}
```

The filter converts a given IBAN to it's human-friendly representation. The separator defaults to a single space.
