[![Build Status](https://travis-ci.org/mmjmanders/ng-iban.svg?branch#master)](https://travis-ci.org/mmjmanders/ng-iban)

# ng-iban - validate input fields as IBAN
The goal is to provide an easy way to validate an input field as an IBAN number with https://angularjs.org/[AngularJS].
From version `0.4.0` the module uses https://github.com/arhs/iban.js[iban.js] for validation.

## Installation

### Bower

`bower install ng-iban`

### NPM

`npm install ng-iban`

### Other

Download file `dist/ng-iban.min.js`.

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
