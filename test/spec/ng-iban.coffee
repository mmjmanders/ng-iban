'use strict'

describe 'Directive: iban', ->

  # load the directive's module
  beforeEach module 'mm.iban'

  scope = undefined
  compile = undefined
  form = undefined

  beforeEach inject ($rootScope, _$compile_) ->
    scope = $rootScope.$new()
    compile = _$compile_

    compile('<form name="form">' +
      '<input name="iban" ng-model="iban" ng-iban required/>' +
      '<input name="optional" ng-model="optional" ng-iban/>' +
      '<input name="invalidcountry" ng-model="invalidcountry" ng-iban="XX"/>' +
      '<input name="country" ng-model="country" ng-iban="NL"/>' +
      '</form>')(scope)
    form = scope.form

  it 'optional should pass with empty IBAN', ->
    form.optional.$setViewValue undefined
    scope.$digest()
    expect(scope.optional).toEqual undefined
    expect(form.optional.$valid).toBe true

  it 'optional should pass with valid IBAN', ->
    form.optional.$setViewValue 'NL91 ABNA 0417 1643 00'
    scope.$digest()
    expect(scope.optional).toEqual 'NL91ABNA0417164300'
    expect(form.optional.$valid).toBe true

  it 'optional should fail with invalid IBAN', ->
    form.optional.$setViewValue 'NL90 ABNA 0417 1643 00'
    scope.$digest()
    expect(scope.optional).toEqual undefined
    expect(form.optional.$valid).toBe false

  it 'required should fail with empty IBAN', ->
    form.iban.$setViewValue undefined
    scope.$digest()
    expect(scope.iban).toEqual undefined
    expect(form.iban.$valid).toBe false

  it 'required should pass with valid IBAN', ->
    form.iban.$setViewValue 'NL91 ABNA 0417 1643 00'
    scope.$digest()
    expect(scope.iban).toEqual 'NL91ABNA0417164300'
    expect(form.iban.$valid).toBe true

  it 'required should fail with invalid IBAN', ->
    form.iban.$setViewValue 'NL90 ABNA 0417 1643 00'
    scope.$digest()
    expect(scope.iban).toEqual undefined
    expect(form.iban.$valid).toBe false

  it 'invalidcountry should fail with invalid country code', ->
    form.invalidcountry.$setViewValue 'NL91 ABNA 0417 1643 00'
    scope.$digest()
    expect(scope.invalidcountry).toEqual undefined
    expect(form.invalidcountry.$valid).toBe false

  it 'country should pass with valid IBAN', ->
    form.country.$setViewValue 'NL91 ABNA 0417 1643 00'
    scope.$digest()
    expect(scope.country).toEqual 'NL91ABNA0417164300'
    expect(form.country.$valid).toBe true

  it 'country should fail with invalid IBAN', ->
    form.country.$setViewValue 'NL90 ABNA 0417 1643 00'
    scope.$digest()
    expect(scope.country).toEqual undefined
    expect(form.country.$valid).toBe false

  it 'model updates to valid IBAN', ->
    scope.iban = 'NL91 ABNA 0417 1643 00'
    scope.$digest()
    expect(scope.iban).toEqual 'NL91ABNA0417164300'
    expect(form.iban.$valid).toBe true

  it 'model updates to invalid IBAN', ->
    scope.iban = 'NL90 ABNA 0417 1643 00'
    scope.$digest()
    expect(scope.iban).toEqual 'NL90 ABNA 0417 1643 00'
    expect(form.iban.$valid).toBe false
