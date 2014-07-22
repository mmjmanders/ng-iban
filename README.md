# ng-iban - validate input fields as IBAN
The goals is to provide an easy way to validate an input field as an IBAN number with [AngularJS](https://angularjs.org/).

## Usage
First add

- `AngularJS`
- `ng-iban`

to your HTML file.

Make sure you require `mm.iban` as a dependency of your AngularJS module.

## Installation
`bower install ng-iban`

### directive

```html
<input type="text" ng-model="iban" ng-iban/>
```

To use this directive the `ngModel` directive must also be used because this directive depends on it.
